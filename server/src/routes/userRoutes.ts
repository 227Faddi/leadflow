import express from 'express';
import verifyJWT from '../middleware/verifyJWT.js';
import userControllers from '../controllers/userControllers.js';

const router = express.Router();

router.use(verifyJWT);

router.get('/get', userControllers.getUser);

export default router;
