import { Request, Response } from 'express';
import cloudinary from '../middleware/cloudinary.js';
import User from '../models/User.js';

export default {
  login: async (req: Request, res: Response) => {
    console.log(req.body);
    res.send('signup');
  },

  signup: async (req: Request, res: Response) => {
    const profileImg = req.file;
    if (!profileImg) {
      console.log('no image');
    } else {
      const customName = `profile_picture_${req.body.username}_${Date.now()}`;
      const result = await cloudinary.uploader.upload(profileImg.path, {
        public_id: customName,
      });
      req.body.profileImg = result.url;
      req.body.cloudinaryId = result.public_id;
    }
    await User.create(req.body);
    res.send('signup');
  },
};
