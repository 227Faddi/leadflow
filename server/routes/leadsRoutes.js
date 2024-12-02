import express from 'express';
import leadsControllers from '../controllers/leadsControllers.js';

const router = express.Router();

router.get('/', leadsControllers.getLeads);
router.post('/add', leadsControllers.addLead);
router.delete('/delete/:id', leadsControllers.deleteLead);

export default router;
