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
  updateUser: asyncHandler(async (req: Request, res: Response) => {
    const changes = req.body;
    const user = await User.findOne({
      where: { id: req.user },
    });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    const newUser = await user.update(changes);
    res.status(200).send(newUser);
  }),
  deleteUser: asyncHandler(async (req: Request, res: Response) => {
    const user = await User.findOne({
      where: { id: req.user },
    });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    user.destroy();

    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });

    res.status(200).json({ message: 'User deleted successfully' });
  }),
};
