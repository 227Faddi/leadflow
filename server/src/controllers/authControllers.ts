import { Request, Response } from 'express';

export default {
  login: async (req: Request, res: Response) => {
    console.log(req.body);
    res.send('signup');
  },

  signup: async (req: Request, res: Response) => {
    console.log(req.body);
    res.send('signup');
  },
};
