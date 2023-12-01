import { useRoutes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import Login from "../views/Auth/login";
import Register from "../views/Auth/register";
import Page1 from "../views/page-1/Main";
import Page2 from "../views/page-2/Main";
import Dashboard from "../views/Dashboard/Main";
import AddProducts from "../views/Products/Add";
import ShowProducts from "../views/Products/Show";
import Categories from "../views/Categories/Main";
import Transactions from "../views/Transactions/Main";
import Settings from "../views/Settings/Main";

function Router() {
  const isAuthenticated = useSelector(state => state.auth.user !== null);

  const PrivateRoute = ({ element, ...rest }) => {
    return isAuthenticated ? (
      element
    ) : (
      <Navigate to="/login" state={{ from: (rest.location && rest.location.pathname) || '/' }} replace />
    );
  };

  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <PrivateRoute element={<Dashboard />} />,
        },
        {
          path: "/products",
          element: <PrivateRoute element={<ShowProducts />} />,
        },
        {
          path: "/products/add",
          element: <PrivateRoute element={<AddProducts />} />,
        },
        {
          path: "/products/show",
          element: <PrivateRoute element={<ShowProducts />} />,
        },
        {
          path: "/categories",
          element: <PrivateRoute element={<Categories />} />,
        },
        {
          path: "/transactions",
          element: <PrivateRoute element={<Transactions />} />,
        },
        {
          path: "/settings",
          element: <PrivateRoute element={<Settings />} />,
        },
      ],
    },
    {
      path: "/simple-menu",
      element: <SimpleMenu />,
      children: [
        {
          path: "page-1",
          element: <PrivateRoute element={<Page1 />} />,
        },
        {
          path: "page-2",
          element: <PrivateRoute element={<Page2 />} />,
        },
      ],
    },
    {
      path: "/top-menu",
      element: <TopMenu />,
      children: [
        {
          path: "page-1",
          element: <PrivateRoute element={<Page1 />} />,
        },
        {
          path: "page-2",
          element: <PrivateRoute element={<Page2 />} />,
        },
      ],
    },
    {
      path: "/login",
      element: isAuthenticated ? <Navigate to="/" replace /> : <Login />,
    },
    {
      path: "/register",
      element: isAuthenticated ? <Navigate to="/" replace /> : <Register />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
