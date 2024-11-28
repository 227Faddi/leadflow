import Lead from '../models/Lead.js';

export default {
  getLeads: async (req, res) => {
    const leads = await Lead.findAll();
    res.status(200).send(leads);
  },
  addLead: async (req, res) => {
    const newLead = req.body;
    await Lead.create(newLead);
    res.status(200).send({ message: 'Lead added successfully' });
  },
};
