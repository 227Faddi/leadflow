import express from 'express';
import userControllers from '../controllers/userControllers.js';
import upload from '../middleware/multer.js';
import verifyJWT from '../middleware/verifyJWT.js';

const router = express.Router();

router.use(verifyJWT);

router.get('/me', userControllers.getUser);
router.put('/me', upload.single('profileImg'), userControllers.updateUser);
router.delete('/me', userControllers.deleteUser);
router.put('/me/password', userControllers.updatePassword);

export default router;
