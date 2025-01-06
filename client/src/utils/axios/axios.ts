import Axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { refreshGet } from "../../features/user/api";

export const axiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

export const updateAxiosHeader = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const refreshAuthLogic = async (failedRequest: any) => {
  const response = await refreshGet();
  if (response.data.message === "Refresh token expired") {
    window.location.href = "/";
    return Promise.reject("Refresh token expired");
  }
  const accessToken = response.data.accessToken;
  failedRequest.response.config.headers[
    "Authorization"
  ] = `Bearer ${accessToken}`;
  updateAxiosHeader(accessToken);
  return Promise.resolve();
};

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {
  statusCodes: [401, 403],
});
