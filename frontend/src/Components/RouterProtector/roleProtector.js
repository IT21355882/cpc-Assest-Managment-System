import React from "react";
import { Navigate } from "react-router-dom";

const RoleProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("LoginUserPosition") === "Admin";

  return isAdmin ? children : <Navigate to="/404" />;
};

export default RoleProtectedRoute;
