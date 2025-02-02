import { Response } from 'express';
import { env } from '../config/index.js';

const errorHandler = (err: Error, res: Response) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export default errorHandler;
