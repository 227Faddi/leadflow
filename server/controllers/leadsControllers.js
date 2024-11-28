import Lead from '../models/Lead.js';

export default {
  getLeads: async (req, res) => {
    const leads = await Lead.findAll();
    res.status(200).send(leads);
  },
};
