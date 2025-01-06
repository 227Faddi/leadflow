import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import User from '../models/User.js';

export default {
  getUser: asyncHandler(async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.status(200).send(users);
  }),
};
