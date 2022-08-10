import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

export const PrivateRoute = () => {
  const { user } = useAppSelector((state) => state.auth);

  const location = useLocation();

  if (user === false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
