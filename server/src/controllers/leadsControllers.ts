import { Request, Response } from 'express';
import Lead from '../models/Lead.js';

export default {
  getLeads: async (req: Request, res: Response) => {
    const leads = await Lead.findAll();
    res.status(200).send(leads);
  },
  addLead: async (req: Request, res: Response) => {
    const newLead = req.body;
    await Lead.create(newLead);
    res.status(200).send({ message: 'Lead added successfully' });
  },
  deleteLead: async (req: Request, res: Response) => {
    const id = req.params.id;
    await Lead.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({ message: 'Lead deleted successfully' });
  },
  statusLead: async (req: Request, res: Response) => {
    const id = req.params.id;
    const lead = await Lead.findByPk(id);

    if (!lead) {
      res.status(404).send({ message: 'Lead not found' });
      return;
    }
    lead.update(req.body);
    res.status(200).send({ message: 'Status updated successfully' });
  },
  getLead: async (req: Request, res: Response) => {
    const id = req.params.id;
    const lead = await Lead.findByPk(id);
    if (!lead) {
      res.status(404).send({ message: 'Lead not found' });
      return;
    }
    res.status(200).send(lead);
  },
  editLead: async (req: Request, res: Response) => {
    const id = req.params.id;
    const lead = await Lead.findByPk(id);
    if (!lead) {
      res.status(404).send({ message: 'Lead not found' });
      return;
    }
    lead.update(req.body);
    res.status(200).send({ message: 'Status updated successfully' });
  },
  sortBy: async (req: Request, res: Response) => {
    const item = req.params.by;
    const order = req.params.order as 'ASC' | 'DESC';
    const leads = await Lead.findAll({
      order: [[item, order]],
    });
    if (!leads) {
      throw new Error('Leads not found');
    }
    res.status(200).send(leads);
  },
};
