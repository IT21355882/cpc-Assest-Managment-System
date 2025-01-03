import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("IsLogin") === "true";

  return isLogin ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
