import { Request, Response } from 'express';
import Lead from '../models/Lead.js';
import asyncHandler from 'express-async-handler';

export default {
  getLeads: asyncHandler(async (req: Request, res: Response) => {
    const leads = await Lead.findAll({ where: { userId: req.user } });
    res.status(200).send(leads);
  }),
  addLead: asyncHandler(async (req: Request, res: Response) => {
    const newLead = req.body;
    await Lead.create({ ...newLead, userId: req.user });
    res.status(200).send({ message: 'Lead added successfully' });
  }),
  deleteLead: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    await Lead.destroy({
      where: {
        id: id,
        userId: req.user,
      },
    });
    res.status(200).send({ message: 'Lead deleted successfully' });
  }),
  deleteAllLeads: asyncHandler(async (req: Request, res: Response) => {
    await Lead.destroy({
      where: {
        userId: req.user,
      },
    });
    res.status(200).send({ message: 'Leads deleted successfully' });
  }),
  statusLead: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const lead = await Lead.findOne({ where: { id: id, userId: req.user } });

    if (!lead) {
      res.status(404).send({ message: 'Lead not found' });
      return;
    }
    lead.update(req.body);
    res.status(200).send({ message: 'Status updated successfully' });
  }),
  getLead: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const lead = await Lead.findOne({ where: { id: id, userId: req.user } });
    if (!lead) {
      res.status(404).send({ message: 'Lead not found' });
      return;
    }
    res.status(200).send(lead);
  }),
  editLead: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const lead = await Lead.findOne({ where: { id: id, userId: req.user } });
    if (!lead) {
      res.status(404).send({ message: 'Lead not found' });
      return;
    }
    lead.update(req.body);
    res.status(200).send({ message: 'Status updated successfully' });
  }),
};
