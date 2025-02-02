import express from 'express';
import leadsControllers from '../controllers/leadsControllers.js';
import verifyJWT from '../middleware/verifyJWT.js';

const router = express.Router();

router.use(verifyJWT);

router.get('/', leadsControllers.getLeads);
router.post('/', leadsControllers.addLead);
router.delete('/', leadsControllers.deleteAllLeads);

router.get('/industry-count', leadsControllers.getIndustryCount);
router.get('/status-count', leadsControllers.getStatusCount);
router.get('/insights', leadsControllers.getInsights);

router.delete('/:id', leadsControllers.deleteLead);
router.get('/:id', leadsControllers.getLead);
router.put('/:id', leadsControllers.editLead);

router.get('/:id/message', leadsControllers.messageLead);

router.put('/:id/status', leadsControllers.statusLead);

export default router;
