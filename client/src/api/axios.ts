import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { Token } from "../types";
import { getRefreshToken } from "./auth";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

export const axiosRefresh = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

export const updateAxiosHeader = (token: Token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const refreshAuthLogic = async (failedRequest: any) => {
  try {
    const response = await getRefreshToken();
    const accessToken = response.data.accessToken;

    if (!accessToken) {
      window.location.href = "/";
      return Promise.reject("Refresh token expired");
    }

    failedRequest.response.config.headers[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    updateAxiosHeader(accessToken);

    return Promise.resolve();
  } catch (error) {
    window.location.href = "/";
    return Promise.reject(error);
  }
};

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
  statusCodes: [401, 403],
});
