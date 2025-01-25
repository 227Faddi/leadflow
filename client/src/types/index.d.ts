import { z } from "zod";
import {
  changePasswordSchema,
  editProfileSchema,
  leadSchema,
  loginSchema,
  signupSchema,
} from "../utils/zod/formValidation";

export type Token = string | undefined;

export type LeadForm = z.infer<typeof leadSchema>;

export type SignupFormData = z.infer<typeof signupSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;

export type ChangePassword = z.infer<typeof changePasswordSchema>;

export type EditProfile = z.infer<typeof editProfileSchema>;

export type IndustryChart = {
  industry: string;
  value: number;
};

export type StatusChart = {
  status: string;
  value: number;
};

export type User = {
  id: string;
  username: string;
  email: string;
  profileImg: string;
  cloudinaryId: string;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  industry: Industry;
  phone: string;
  location: string;
  status: Status;
};

type Status =
  | "new"
  | "contacted"
  | "negotiating"
  | "converted"
  | "disqualified";

type Industry =
  | "other"
  | "technology"
  | "healthcare"
  | "finance"
  | "retail"
  | "hospitality"
  | "food&Beverage"
  | "education"
  | "construction"
  | "transportation"
  | "realEstate"
  | "manufacturing"
  | "professional"
  | "fitness"
  | "automotive";
