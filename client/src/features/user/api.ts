/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "../../utils/axios/axios";

export const userGet = async (): Promise<any> => {
  const response = await axiosInstance.get("/user/get");
  return response.data;
};
