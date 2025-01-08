import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { refreshGet } from "../../features/auth/api";
import { Token } from "../../types";

export const axiosInstance = axios.create({
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const refreshAuthLogic = async (failedRequest: any) => {
  try {
    const response = await refreshGet();
    const accessToken = response.data.accessToken;

    if (!accessToken) {
      window.location.href = "/";
      return Promise.reject("Refresh token expired");
    }
    failedRequest.response.config.headers[
      "Authorization"
    ] = `Bearer ${accessToken}`;
    updateAxiosHeader(accessToken);
    return axiosInstance(failedRequest.response.config);
  } catch (error) {
    return Promise.reject(error);
  }
};

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
  statusCodes: [401, 403],
});
