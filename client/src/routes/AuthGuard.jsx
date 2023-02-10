import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "@hooks/useAuth";

const AuthGuard = ({ allowRole, children }) => {
  const { isAuthenticated, user } = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }

    return <Navigate to="/" state={{ from: requestedLocation }} replace />;
  }

  if (allowRole !== user?.role) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

export default AuthGuard;
