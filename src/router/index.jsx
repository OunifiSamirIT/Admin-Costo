import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SideMenu from "../layouts/side-menu/Main";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/register";
import Dashboard from "../views/Dashboard/Main";
import Products from "../views/Products/Main";
import Categories from "../views/Categories/Main";
import Transactions from "../views/Transactions/Main";
import Settings from "../views/Settings/Main";

function AuthenticatedRoutes() {
  return (
    <SideMenu>
      <Dashboard path="/" />
      <Products path="/products" />
      <Categories path="/categories" />
      <Transactions path="/transactions" />
      <Settings path="/settings" />
    </SideMenu>
  );
}

function Router() {
  const isAuthenticated = useSelector(
    (state) => state.auth.status === "succeeded"
  );
  const isLoggingIn = useSelector((state) => state.auth.status === "loading");
  if (isLoggingIn) {
    return <div>Checking Authentication...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin text-9xl text-indigo-600 mb-2">
            &#9696;
          </div>
          <div className="text-gray-700 text-5xl">
            Not Authorized. Please log in.
          </div>
        </div>
      </div>
    );
  }

  const routes = useRoutes([
    {
      path: "/",
      element: isAuthenticated ? (
        <AuthenticatedRoutes />
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return routes;
}

export default Router;
