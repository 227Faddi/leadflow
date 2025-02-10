import { Navigate, Outlet } from "react-router-dom";
import { useGetRefreshToken } from "../states/auth";

const EnsureGuest = () => {
  const { token } = useGetRefreshToken();
  return token ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default EnsureGuest;
