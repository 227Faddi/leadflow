import express from 'express';
// import verifyJWT from '../middleware/verifyJWT.ts';
import userControllers from '../controllers/userControllers.ts';

const router = express.Router();

// router.use(verifyJWT);

router.get('/get', userControllers.getUser);

export default router;
