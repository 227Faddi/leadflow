/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "../../utils/axios/axios";

export const getUser = async (): Promise<any> => {
  const response = await axiosInstance.get("/user/get");
  return response.data;
};

export const deleteUser = async (): Promise<void> => {
  await axiosInstance.delete(`/user/delete`);
};

export const changePassword = async (): Promise<void> => {
  await axiosInstance.put(`/user/change-password`);
};

export const editProfile = async (formData: FormData): Promise<any> => {
  const response = await axiosInstance.put("/user/edit-profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
