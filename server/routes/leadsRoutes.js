import express from 'express';
import leadsControllers from '../controllers/leadsControllers.js';

const router = express.Router();

router.get('/', leadsControllers.getLeads);
router.post('/add', leadsControllers.addLead);

export default router;
