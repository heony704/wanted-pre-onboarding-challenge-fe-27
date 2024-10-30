import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../utils/token";

function RequireAuth() {
  const token = getToken();

  if (!token) return <Navigate to="/signin" replace />;

  return <Outlet />;
}

export default RequireAuth;
