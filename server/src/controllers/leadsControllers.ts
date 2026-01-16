import { ApiError, GoogleGenAI } from "@google/genai";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import sequelize from "../config/database.js";
import { env } from "../config/index.js";
import Lead from "../models/Lead.js";
import User from "../models/User.js";

const ai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
const CURRENT_MODEL = env.CURRENT_MODEL;

export default {
  getLeads: asyncHandler(async (req: Request, res: Response) => {
    const leads = await Lead.findAll({
      where: { userId: req.user },
      order: [[sequelize.literal("status"), "ASC"]],
    });
    res.status(200).send(leads);
  }),

  addLead: asyncHandler(async (req: Request, res: Response) => {
    const newLead = req.body;
    await Lead.create({ ...newLead, userId: req.user });
    res.status(200).send({ message: "Lead added successfully" });
  }),

  deleteLead: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    await Lead.destroy({
      where: {
        id: id,
        userId: req.user,
      },
    });
    res.status(200).send({ message: "Lead deleted successfully" });
  }),

  deleteAllLeads: asyncHandler(async (req: Request, res: Response) => {
    const user = await User.findOne({
      where: { id: req.user },
    });

    if (user?.id === env.GUEST_ID) {
      res.status(400).json({
        message:
          "Sorry you can not delete this profile, create a new one instead",
      });
      throw new Error("Can not modify guest account");
    }
    await Lead.destroy({
      where: {
        userId: req.user,
      },
    });
    res.status(200).send({ message: "Leads deleted successfully" });
  }),

  updateLeadStatus: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const lead = await Lead.findOne({ where: { id: id, userId: req.user } });

    if (!lead) {
      res.status(404).send({ message: "Lead not found" });
      return;
    }
    lead.update(req.body);
    res.status(200).send({ message: "Status updated successfully" });
  }),

  getLead: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const lead = await Lead.findOne({ where: { id: id, userId: req.user } });
    if (!lead) {
      res.status(404).send({ message: "Lead not found" });
      return;
    }
    res.status(200).send(lead);
  }),

  getIndustryCount: asyncHandler(async (req: Request, res: Response) => {
    const data = await Lead.findAll({
      where: { userId: req.user },
      attributes: [
        "industry",
        [sequelize.fn("COUNT", sequelize.col("industry")), "value"],
      ],
      limit: 5,
      order: [[sequelize.literal("value"), "DESC"]],
      group: ["industry"],
      raw: true,
    });

    res.status(200).send(data);
  }),

  getStatusCount: asyncHandler(async (req: Request, res: Response) => {
    const data = await Lead.findAll({
      where: { userId: req.user },
      attributes: [
        "status",
        [sequelize.fn("COUNT", sequelize.col("status")), "value"],
      ],
      group: ["status"],
      raw: true,
    });

    res.status(200).send(data);
  }),

  updateLead: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const lead = await Lead.findOne({ where: { id: id, userId: req.user } });
    if (!lead) {
      res.status(404).send({ message: "Lead not found" });
      return;
    }
    lead.update(req.body);
    res.status(200).send({ message: "Status updated successfully" });
  }),

  getLeadMessage: asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const lead = await Lead.findOne({
      where: { id: id },
      attributes: {
        exclude: ["id", "status", "userId", "createdAt", "updatedAt"],
      },
      raw: true,
    });
    if (!lead) {
      res.status(404).send({ message: "Lead not found" });
      return;
    }

    const prompt = `
      Write a short, friendly sales email for ${lead.name} in the ${lead.industry} industry located in ${lead.location}. Follow this structure:  
      1. **Structure Flow**:  
      - Subject line: Mention ${lead.industry} and ${lead.location} (e.g., "Boost Your [Industry] Success in [City]").  
      - Opening: Greet ${lead.name}, introduce [Your Company], and mention how you help ${lead.industry} businesses (include [service details]).  
      - Hook: Reference ${lead.location}’s ${lead.industry} scene and hint at a result like [insert result].  
      - CTA: Ask to schedule a call.  
      - Sign-off: Close with "[Your Full Name]".  
      2. **Rules**:  
      - Keep [bracketed placeholders] for user inputs.  
      - Stay under 100 words.
    `;

    try {
      const response = await ai.models.generateContent({
        model: CURRENT_MODEL,
        contents: prompt,
      });
      res.status(200).send({ message: response.text });
    } catch (error) {
      if (error instanceof ApiError) {
        console.error("Gemini API Error:", error.status, error.message);
        if (error.status === 429) {
          res.status(429).send({
            message: "AI service rate limit exceeded. Please try again later.",
          });
          return;
        }
        if (error.status === 503) {
          res.status(503).send({
            message: "AI service is currently overloaded. Please try again later.",
          });
          return;
        }
      }
      console.error("Unexpected error generating message:", error);
      res.status(500).send({ message: "Failed to generate message." });
    }
  }),

  getInsights: asyncHandler(async (req: Request, res: Response) => {
    const statuses = await Lead.findAll({
      where: { userId: req.user },
      attributes: [
        "status",
        [sequelize.fn("COUNT", sequelize.col("status")), "value"],
      ],
      group: ["status"],
      raw: true,
    });

    const industries = await Lead.findAll({
      where: { userId: req.user },
      attributes: [
        "industry",
        [sequelize.fn("COUNT", sequelize.col("industry")), "value"],
      ],
      limit: 5,
      order: [[sequelize.literal("value"), "DESC"]],
      group: ["industry"],
      raw: true,
    });

    const prompt = `
      Analyze the following lead analytics data and provide a summary of key trends and insights. 
      Focus on identifying lead distribution patterns across industries and statuses, as well as suggesting opportunities for improvement. 
      Please provide a concise 3-4 sentence summary highlighting important findings: 
      **Data**: 
      - Industries: ${JSON.stringify(industries)} 
      - Statuses: ${JSON.stringify(statuses)}
    `;

    try {
      const response = await ai.models.generateContent({
        model: CURRENT_MODEL,
        contents: prompt,
      });
      res.status(200).send({ message: response.text });
    } catch (error) {
      if (error instanceof ApiError) {
        console.error("Gemini API Error:", error.status, error.message);
        if (error.status === 429) {
          res.status(429).send({
            message: "AI service rate limit exceeded. Please try again later.",
          });
          return;
        }
        if (error.status === 503) {
          res.status(503).send({
            message: "AI service is currently overloaded. Please try again later.",
          });
          return;
        }
      }
      console.error("Unexpected error generating insights:", error);
      res.status(500).send({ message: "Failed to generate insights." });
    }
  }),
};
