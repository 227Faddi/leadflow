import express from 'express';
import leadsControllers from '../controllers/leadsControllers.js';

const router = express.Router();

router.get('/', leadsControllers.getLeads);
router.get('/edit/:id', leadsControllers.getEditLead);

router.post('/add', leadsControllers.addLead);

router.put('/status/:id', leadsControllers.statusLead);
router.put('/edit/:id', leadsControllers.editLead);

router.get('/sort/:by/:order', leadsControllers.sortBy);

router.delete('/delete/:id', leadsControllers.deleteLead);

export default router;
