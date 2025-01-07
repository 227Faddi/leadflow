import { z } from "zod";
import {
  changePasswordSchema,
  editProfileSchema,
  leadSchema,
  loginSchema,
  signupSchema,
} from "../utils/zod/formValidation";

export type User = {
  id: string;
  username: string;
  email: string;
  profileImg: string;
  cloudinaryId: string;
};

export type Token = string | undefined;

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

export type SignupFormData = z.infer<typeof signupSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;

export type ChangePassword = z.infer<typeof changePasswordSchema>;

export type EditProfile = z.infer<typeof editProfileSchema>;
