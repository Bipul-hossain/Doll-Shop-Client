import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Login from "../components/Authorization/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "product/details/:id",

        Component: ProductDetails,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
