import express from 'express';
import verifyJWT from '../middleware/verifyJWT.js';
import userControllers from '../controllers/userControllers.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.use(verifyJWT);

router.get('/get', userControllers.getUser);

router.put('/edit', upload.single('profileImg'), userControllers.updateUser);

router.put('/edit/password', userControllers.updatePassword);

router.delete('/delete', userControllers.deleteUser);

export default router;
