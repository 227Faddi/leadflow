import bcrypt from "bcrypt";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { env } from "../config/index.js";
import cloudinary from "../middleware/cloudinary.js";
import User from "../models/User.js";

export default {
  getUser: asyncHandler(async (req: Request, res: Response) => {
    const user = await User.findOne({
      where: { id: req.user },
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).send(user);
  }),

  updateUser: asyncHandler(async (req: Request, res: Response) => {
    const userUpdates = req.body;
    const { username } = req.body;
    const profileImg = req.file;

    const user = await User.findOne({
      where: { id: req.user },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (user.id === env.GUEST_ID) {
      res.status(400).json({
        message: "Sorry you can not modify this profile",
      });
      throw new Error("Sorry you can not modify this profile");
    }

    if (profileImg) {
      // Change image in cloudinary
      const customName = `profile_picture_${username}_${Date.now()}`;
      const result = await cloudinary.uploader.upload(profileImg.path, {
        public_id: customName,
      });
      userUpdates.profileImg = result.secure_url;
      userUpdates.cloudinaryId = result.public_id;
      // Delete old image in cloudinary
      await cloudinary.uploader.destroy(user.cloudinaryId);
    }

    await user.update(userUpdates);

    res.status(200).send(user);
  }),

  updatePassword: asyncHandler(async (req: Request, res: Response) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    const user = await User.findOne({
      where: { id: req.user },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (user.id === env.GUEST_ID) {
      res.status(400).json({
        message: "Sorry you can not modify this profile",
      });
      throw new Error("Can not modify guest account");
    }

    if (newPassword != confirmPassword) {
      res.status(400).json({
        message: "Passwords do not match",
      });
      throw new Error("Passwords do not match");
    }

    // Check current password
    if (!(await bcrypt.compare(currentPassword, user.dataValues.password))) {
      res.status(400).json({
        message: "Invalid password. Please try again",
      });
      throw new Error("Invalid password");
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const newHashedPassword = await bcrypt.hash(newPassword, salt);

    await user.update({ password: newHashedPassword });

    res.status(200).json({ message: "Password updated successfully" });
  }),

  deleteUser: asyncHandler(async (req: Request, res: Response) => {
    const user = await User.findOne({
      where: { id: req.user },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (user.id === env.GUEST_ID) {
      res.status(400).json({
        message:
          "Sorry you can not delete this profile, create a new one instead",
      });
      throw new Error("Can not modify guest account");
    }

    user.destroy();

    // Delete old image in cloudinary
    await cloudinary.uploader.destroy(user.cloudinaryId);

    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({ message: "User deleted successfully" });
  }),
};
