import axios from "../../utils/axios";
import { LoginFormData, SignupFormData } from "../../types";

export const signupPost = async (formData: SignupFormData): Promise<void> => {
  await axios.post("/auth/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const loginPost = async (formData: LoginFormData): Promise<void> => {
  await axios.post("/auth/login", formData);
};

export const logoutPost = async (): Promise<void> => {
  await axios.post("/auth/logout");
};
