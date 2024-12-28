import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import cloudinary from '../middleware/cloudinary.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const jwtAccess = process.env.ACCESS_TOKEN_SECRET;
const jwtRefresh = process.env.REFRESH_TOKEN_SECRET;

export default {
  login: asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user || !(await bcrypt.compare(password, user.dataValues.password))) {
      res.status(400).json({
        message: 'Invalid email or password. Please try again',
      });
      throw new Error('Invalid credentials');
    }

    if (!jwtAccess || !jwtRefresh) {
      throw new Error('JWT variables are not defined');
      return;
    }

    const accessToken = jwt.sign(
      {
        user: {
          id: user.dataValues.id,
        },
      },
      jwtAccess,
      { expiresIn: '10s' }
    );

    const refreshToken = jwt.sign({ id: user.dataValues.id }, jwtRefresh, {
      expiresIn: '7d',
    });

    // Create secure cookie with refresh token
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Send accessToken containing username and roles
    res.json({ accessToken });
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

    await User.create(req.body);

    res.send({
      message: `Welcome, ${username}! Your account has been created.`,
    });
  }),
};
