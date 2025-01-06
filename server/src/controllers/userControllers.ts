import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import User from '../models/User.js';

export default {
  getUser: asyncHandler(async (req: Request, res: Response) => {
    const user = await User.findOne({
      where: { id: req.user },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).send(user);
  }),
};
