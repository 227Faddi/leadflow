/* eslint-disable @typescript-eslint/no-explicit-any */
import { axios } from "../../utils/axios";
import { LoginFormData, SignupFormData } from "../../types";

export const userGet = async (): Promise<any> => {
  const response = await axios.get("/auth/user");
  return response;
};

export const signupPost = async (formData: SignupFormData): Promise<any> => {
  const response = await axios.post("/auth/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

export const loginPost = async (formData: LoginFormData): Promise<any> => {
  const response = await axios.post("/auth/login", formData);
  return response;
};

export const logoutPost = async (): Promise<void> => {
  await axios.post("/auth/logout");
};
