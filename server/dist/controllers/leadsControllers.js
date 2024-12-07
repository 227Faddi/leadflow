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
    deleteLead: async (req, res) => {
        const id = req.params.id;
        await Lead.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).send({ message: 'Lead deleted successfully' });
    },
    statusLead: async (req, res) => {
        const id = req.params.id;
        const lead = await Lead.findByPk(id);
        if (!lead) {
            res.status(404).send({ message: 'Lead not found' });
            return;
        }
        lead.update(req.body);
        res.status(200).send({ message: 'Status updated successfully' });
    },
    getLead: async (req, res) => {
        const id = req.params.id;
        const lead = await Lead.findByPk(id);
        if (!lead) {
            res.status(404).send({ message: 'Lead not found' });
            return;
        }
        res.status(200).send(lead);
    },
    editLead: async (req, res) => {
        const id = req.params.id;
        const lead = await Lead.findByPk(id);
        if (!lead) {
            res.status(404).send({ message: 'Lead not found' });
            return;
        }
        lead.update(req.body);
        res.status(200).send({ message: 'Status updated successfully' });
    },
    sortBy: async (req, res) => {
        const item = req.params.by;
        const order = req.params.order;
        const leads = await Lead.findAll({
            order: [[item, order]],
        });
        if (!leads) {
            throw new Error('Leads not found');
        }
        res.status(200).send(leads);
    },
};
//# sourceMappingURL=leadsControllers.js.map