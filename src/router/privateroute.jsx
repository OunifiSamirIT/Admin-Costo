// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.user !== null);

  return isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
