import { leadSchema } from "../../utils/formValidation";
import { z } from "zod";

export type Lead = {
  id: string;
  name: string;
  email: string;
  industry: string;
  phone: string;
  location: string;
  status: "new" | "contacted" | "negotiating" | "converted" | "disqualified";
};

export type LeadForm = z.infer<typeof leadSchema>;
