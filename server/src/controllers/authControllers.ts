import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { env } from '../config/index.js';
import cloudinary from '../middleware/cloudinary.js';
import User from '../models/User.js';

export default {
  refresh: asyncHandler((req: Request, res: Response) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const refreshToken = cookies.jwt;

    jwt.verify(
      refreshToken,
      env.JWT_REFRESH_TOKEN_SECRET,
      async (err: Error | null, decoded: string | JwtPayload | undefined) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            res.clearCookie('jwt', {
              httpOnly: true,
              secure: true,
              sameSite: 'none',
            });
            return res.status(401).json({ message: 'Refresh token expired' });
          }
          return res.status(403).json({ message: 'Forbidden' });
        }

        const foundUser = await User.findOne({
          where: { id: (decoded as JwtPayload).id },
        });

        if (!foundUser) {
          res.status(401).json({ message: 'Unauthorized' });
          return;
        }

        const accessToken = jwt.sign(
          {
            user: {
              id: foundUser.dataValues.id,
            },
          },
          env.JWT_ACCESS_TOKEN_SECRET,
          { expiresIn: env.JWT_ACCESS_TOKEN_EXPIRATION }
        );

        res.json({ accessToken });
      }
    );
  }),

  login: asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user || !(await bcrypt.compare(password, user.dataValues.password))) {
      res.status(400).json({
        message: 'Invalid email or password. Please try again',
      });
      throw new Error('Invalid credentials');
    }

    const accessToken = jwt.sign(
      {
        user: {
          id: user.dataValues.id,
        },
      },
      env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: env.JWT_ACCESS_TOKEN_EXPIRATION }
    );

    const refreshToken = jwt.sign(
      { id: user.dataValues.id },
      env.JWT_REFRESH_TOKEN_SECRET,
      {
        expiresIn: env.JWT_REFRESH_TOKEN_EXPIRATION,
      }
    );

    // Create secure cookie with refresh token
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: env.BASE_DOMAIN,
      maxAge: env.JWT_REFRESH_TOKEN_MAX_AGE,
    });

    res.json({ accessToken });
  }),

  signup: asyncHandler(async (req: Request, res: Response) => {
    const { username, email, password, confirmPassword } = req.body;
    const profileImg = req.file;

    // Profile Image
    if (!profileImg) {
      req.body.profileImg = env.AVATAR_DICEBEAR_URL + username;
    } else {
      const customName = `profile_picture_${username}_${Date.now()}`;
      const result = await cloudinary.uploader.upload(profileImg.path, {
        public_id: customName,
      });
      req.body.profileImg = result.secure_url;
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

    const user = await User.create(req.body);

    const accessToken = jwt.sign(
      {
        user: {
          id: user.dataValues.id,
        },
      },
      env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: env.JWT_ACCESS_TOKEN_EXPIRATION }
    );

    const refreshToken = jwt.sign(
      { id: user.dataValues.id },
      env.JWT_REFRESH_TOKEN_SECRET,
      {
        expiresIn: env.JWT_REFRESH_TOKEN_EXPIRATION,
      }
    );

    // Create secure cookie with refresh token
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: env.BASE_DOMAIN,
      maxAge: env.JWT_REFRESH_TOKEN_MAX_AGE,
    });

    res.json({
      accessToken,
      message: `Welcome, ${username}! Your account has been created.`,
    });
  }),

  logout: asyncHandler((req: Request, res: Response) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
      res.sendStatus(204);
      return;
    }
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      domain: env.BASE_DOMAIN,
    });
    res.redirect(env.CLIENT_URL);
  }),

  socialCallback: asyncHandler((req: Request, res: Response) => {
    const refreshToken = jwt.sign(
      { id: req.user?.id },
      env.JWT_REFRESH_TOKEN_SECRET,
      {
        expiresIn: env.JWT_REFRESH_TOKEN_EXPIRATION,
      }
    );

    // Create secure cookie with refresh token
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: true,
      domain: env.BASE_DOMAIN,
      maxAge: env.JWT_REFRESH_TOKEN_MAX_AGE,
    });

    res.redirect(env.CLIENT_URL + '/dashboard');
  }),
};
