import { Navigate, Outlet } from "react-router-dom";
import { useGetRefreshToken } from "../../features/auth/hooks";

const EnsureAuth = () => {
  const { token, isError } = useGetRefreshToken();
  if (isError) return <Navigate to="/" />;
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default EnsureAuth;
