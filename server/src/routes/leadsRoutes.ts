import express from 'express';
import leadsControllers from '../controllers/leadsControllers.js';
import verifyJWT from '../middleware/verifyJWT.js';

const router = express.Router();

router.use(verifyJWT);

router.get('/', leadsControllers.getLeads);
router.get('/:id', leadsControllers.getLead);

router.post('/add', leadsControllers.addLead);

router.put('/status/:id', leadsControllers.statusLead);
router.put('/edit/:id', leadsControllers.editLead);

router.get('/sort/:by/:order', leadsControllers.sortBy);

router.delete('/delete/:id', leadsControllers.deleteLead);

export default router;
