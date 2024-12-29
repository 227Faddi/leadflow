import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!(authHeader as string)?.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const token = (authHeader as string).split(' ')[1];

  const jwtAccess = process.env.ACCESS_TOKEN_SECRET;

  if (!jwtAccess) {
    throw new Error('JWT variables are not defined');
  }

  jwt.verify(token, jwtAccess, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = (decoded as JwtPayload).user.id;
    next();
  });
};

export default verifyJWT;
