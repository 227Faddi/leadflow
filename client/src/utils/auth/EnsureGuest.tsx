import { Navigate, Outlet } from "react-router-dom";
import { useGetRefreshToken } from "../../features/auth/hooks";

const EnsureGuest = () => {
  const { token } = useGetRefreshToken();
  return token ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default EnsureGuest;
