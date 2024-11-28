import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .max(30, { message: "Email cannot exceed 30 characters." })
    .trim()
    .toLowerCase(),
  password: z.string().min(1, { message: "Password is required." }),
});

export const signupSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: "Username is required." })
      .max(30, { message: "Username cannot exceed 30 characters." }),

    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Please enter a valid email address." })
      .max(30, { message: "Email cannot exceed 30 characters." })
      .trim()
      .toLowerCase(),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." }),

    confirmPassword: z.string().min(8, {
      message: "Confirm Password must be at least 8 characters long.",
    }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match.",
      path: ["confirmPassword"],
    }
  );

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required." })
    .max(30, { message: "Name cannot exceed 30 characters." }),

  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .max(30, { message: "Email cannot exceed 30 characters." })
    .trim()
    .toLowerCase(),

  industry: z
    .string()
    .trim()
    .min(1, { message: "Industry is required." })
    .max(30, { message: "Industry cannot exceed 30 characters." }),

  phone: z
    .string()
    .min(7, { message: "Invalid phone number: too short." })
    .max(15, { message: "Invalid phone number: too long." })
    .regex(/^\+?[0-9\s\-()]+$/, { message: "Invalid phone number format." }),

  location: z
    .string()
    .max(30, { message: "Location cannot exceed 30 characters." }),
});
