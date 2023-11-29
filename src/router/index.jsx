import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideMenu from '../layouts/side-menu/Main';
import Login from '../views/Auth/Login';
import Register from '../views/Auth/register';
import Dashboard from '../views/Dashboard/Main';
import Products from '../views/Products/Main';
import Categories from '../views/Categories/Main';
import Transactions from '../views/Transactions/Main';
import Settings from '../views/Settings/Main';

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
  const isAuthenticated = useSelector((state) => state.auth.status === 'succeeded');
  const routes = useRoutes([
    {
      path: '/',
      element: isAuthenticated ? <AuthenticatedRoutes /> : <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return routes;
}

export default Router;
