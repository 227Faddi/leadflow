import { axiosInstance, axiosRefresh } from "../../utils/axios/axios";
import { LoginFormData, Token } from "../../types";

// Default axios instance to handle refresh interceptor
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const refreshGet = async (): Promise<any> => {
  const response = await axiosRefresh.get("/auth/refresh", {
    withCredentials: true,
  });
  // if(response.status === 401){
  //   window.location.href = "/";

  // }

  return response;
};

export const signupPost = async (
  formData: FormData
): Promise<{ accessToken: Token; message?: string }> => {
  const response = await axiosInstance.post("/auth/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const loginPost = async (
  formData: LoginFormData
): Promise<{ accessToken: Token; message?: string }> => {
  const response = await axiosInstance.post("/auth/login", formData);
  return response.data;
};

export const logoutPost = async (): Promise<void> => {
  await axiosInstance.post("/auth/logout");
};
