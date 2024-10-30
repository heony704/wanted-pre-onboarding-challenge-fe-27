import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getToken } from "../utils/token";

function RedirectIfAuth() {
  const token = getToken();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) return <Navigate to={from} replace />;

  return <Outlet />;
}

export default RedirectIfAuth;
