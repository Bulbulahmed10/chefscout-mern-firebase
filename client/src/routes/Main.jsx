import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import User from "../pages/user/User";
import Registration from "../pages/registration/Registration";
import ErrorPage from "../pages/error/ErrorPage";
import ProtectedRoutes from "./ProtectedRoutes";
const Chef = lazy(() => import("../pages/chef/Chef"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/me",
        element: (
          <ProtectedRoutes>
            <User />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/chef/:id",
        element: (
          <ProtectedRoutes>
            <Suspense fallback="Loading...">
              <Chef />
            </Suspense>
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
