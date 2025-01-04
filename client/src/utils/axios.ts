import Axios from "axios";
import { useToken } from "../features/user/hooks";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

// export const updateAxiosHeader = (token: string | null) => {
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common["Authorization"];
//   }
// };

export const useAuthInterceptor = () => {
  const { token, setToken } = useToken();
  axios.interceptors.request.use(function (config) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axios.interceptors.response.use(function (error) {
    return Promise.reject(error);
  });
};
