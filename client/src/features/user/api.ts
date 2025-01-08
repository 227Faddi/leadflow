import { ChangePassword, User } from "../../types";
import { axiosInstance } from "../../utils/axios/axios";

export const getUser = async (): Promise<User> => {
  const response = await axiosInstance.get("/user/get");
  return response.data;
};

export const deleteUser = async (): Promise<void> => {
  await axiosInstance.delete(`/user/delete`);
};

export const changePassword = async (
  formData: ChangePassword
): Promise<void> => {
  await axiosInstance.put(`/user/edit/password`, formData);
};

export const editProfile = async (formData: FormData): Promise<User> => {
  const response = await axiosInstance.put("/user/edit", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
