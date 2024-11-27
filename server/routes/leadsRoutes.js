import express from 'express';
import leadsControllers from '../controllers/leadsControllers.js';

const router = express.Router();

router.get('/', leadsControllers.getLeads);

export default router;
