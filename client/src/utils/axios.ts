import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export default axios;
