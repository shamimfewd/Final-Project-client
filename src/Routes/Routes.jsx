import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main/Main";
import Menu from "../Pages/MenuPage/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";
import Secret from "../Pages/Shared/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashboardPage/Cart";
import AllUsers from "../Pages/DashboardPage/AllUsers";
import AddItems from "../Pages/DashboardPage/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashboardPage/ManageItems";
import UpdateItem from "../Pages/DashboardPage/UpdateItem";
import Payment from "../Pages/DashboardPage/Payment";
import PaymentHistry from "../Pages/DashboardPage/PaymentHistry";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SingUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistry />,
      },

      // admin routes

      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },

      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
