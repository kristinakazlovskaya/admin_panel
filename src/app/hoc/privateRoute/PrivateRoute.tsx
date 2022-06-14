import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "app/hooks";

const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const auth = useAuth();

  if (!auth.isAuthorizedUser) {
    return <Navigate to="login" />;
  }

  return children;
};

export default PrivateRoute;
