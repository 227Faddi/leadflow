import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import cloudinary from '../middleware/cloudinary.js';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

//b
export default {
  login: asyncHandler(async (req: Request, res: Response) => {
    console.log(req.body);
    res.send('signup');
  }),

  signup: asyncHandler(async (req: Request, res: Response) => {
    const { username, email, password, confirmPassword } = req.body;
    const profileImg = req.file;

    // Profile Image
    if (!profileImg) {
      req.body.profileImg = `https://api.dicebear.com/9.x/initials/svg?seed=${username}`;
    } else {
      const customName = `profile_picture_${username}_${Date.now()}`;
      const result = await cloudinary.uploader.upload(profileImg.path, {
        public_id: customName,
      });
      req.body.profileImg = result.url;
      req.body.cloudinaryId = result.public_id;
    }

    // Check Values
    if (password != confirmPassword) {
      res.status(400).json({
        status: 'error',
        message: 'Passwords do not match',
      });
      throw new Error('Passwords do not match');
    }

    const userExists = await User.findOne({ where: { email: email } });
    if (userExists) {
      res.status(400).json({
        message: 'User email already exists. Please log in instead',
      });
      throw new Error('User email already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    req.body.password = hashedPassword;

    console.log(req.body);

    await User.create(req.body);
    res.send('signup');
  }),
};
