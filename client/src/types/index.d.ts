import {
  leadSchema,
  loginSchema,
  signupSchema,
} from "../../utils/formValidation";
import { z } from "zod";
import {
  changePassSchema,
  editProfileSchema,
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

export type ChangePass = z.infer<typeof changePassSchema>;

export type EditProfile = z.infer<typeof editProfileSchema>;
