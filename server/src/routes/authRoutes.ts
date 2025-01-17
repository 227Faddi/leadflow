import express from 'express';
import authControllers from '../controllers/authControllers.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.get('/refresh', authControllers.refresh);
router.post('/login', authControllers.login);
router.post('/logout', authControllers.logout);
router.post('/signup', upload.single('profileImg'), authControllers.signup);

export default router;
