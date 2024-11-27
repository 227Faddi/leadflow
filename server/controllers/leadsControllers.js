import mysqlDB from '../config/database.js';

export default {
  getLeads: async (req, res) => {
    const [leads] = await mysqlDB.query('SELECT * FROM leads');
    res.status(200).send(leads);
  },
};
