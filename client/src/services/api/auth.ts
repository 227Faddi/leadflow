import axios from "axios";
import { LoginFormData, SignupFormData } from "../../types";

const serverURL = import.meta.env.VITE_SERVER_URL;

export const signupPost = async (formData: SignupFormData): Promise<void> => {
  await axios.post(`${serverURL}/auth/signup`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const loginPost = async (formData: LoginFormData): Promise<void> => {
  await axios.post(`${serverURL}/auth/login`, formData);
};
