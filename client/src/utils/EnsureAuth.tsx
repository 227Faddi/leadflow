import { Navigate, Outlet } from "react-router-dom";
import { useToken } from "../states/auth";

const EnsureAuth = () => {
  const { token } = useToken();
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default EnsureAuth;
