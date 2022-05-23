import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthProviderProps } from "./AuthProvider";

const PrivateRoute: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
