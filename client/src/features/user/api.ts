import { ChangePassword, User } from "../../types";
import { axiosInstance } from "../../utils/axios/axios";

export const getUser = async (): Promise<User> => {
  const response = await axiosInstance.get("/users/me");
  return response.data;
};

export const deleteUser = async (): Promise<void> => {
  await axiosInstance.delete(`/users/me`);
};

export const changePassword = async (
  formData: ChangePassword
): Promise<void> => {
  await axiosInstance.put(`/users/me/password`, formData);
};

export const editProfile = async (formData: FormData): Promise<User> => {
  const response = await axiosInstance.put("/users/me", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
