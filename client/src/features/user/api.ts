/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "../../utils/axios/axios";
import { LoginFormData, SignupFormData } from "../../types";

export const userGet = async (): Promise<any> => {
  const response = await axiosInstance.get("/user/get");
  return response.data;
};

export const refreshGet = async (): Promise<any> => {
  const response = await axiosInstance.get("/auth/refresh", {
    withCredentials: true,
  });
  return response;
};

export const signupPost = async (formData: SignupFormData): Promise<any> => {
  const response = await axiosInstance.post("/auth/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

export const loginPost = async (formData: LoginFormData): Promise<any> => {
  const response = await axiosInstance.post("/auth/login", formData);
  return response;
};

export const logoutPost = async (): Promise<void> => {
  await axiosInstance.post("/auth/logout");
};
