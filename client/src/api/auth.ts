import { axiosInstance, axiosRefresh } from "../api/axios";
import { LoginFormData, Token } from "../types";

// Default axios instance to handle refresh interceptor
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRefreshToken = async (): Promise<any> => {
  const response = await axiosRefresh.get("/auth/refresh", {
    withCredentials: true,
  });
  return response;
};

export const postSignup = async (
  formData: FormData
): Promise<{ accessToken: Token; message?: string }> => {
  const response = await axiosInstance.post("/auth/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const postLogin = async (
  formData: LoginFormData
): Promise<{ accessToken: Token; message?: string }> => {
  const response = await axiosInstance.post("/auth/login", formData);
  return response.data;
};

export const postLogout = async (): Promise<void> => {
  await axiosInstance.post("/auth/logout");
};
