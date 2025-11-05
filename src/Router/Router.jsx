import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Login from "../components/Authorization/Login/Login";
import Registration from "../components/Authorization/Registration/Registration";
import Protected from "../components/Protected/Protected";
import ProductUploadForm from "../components/PrivateRoute/ProductUploadForm";
import Card from "../components/PrivateRoute/Card";

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
      {
        path: "/registration",
        Component: Registration,
      },
      {
        path: "/product/upload",
        element: (
          <Protected>
            <ProductUploadForm></ProductUploadForm>
          </Protected>
        ),
      },
      {
        path: "/product/card",
        element: (
          <Protected>
            <Card></Card>
          </Protected>
        ),
      },
    ],
  },
]);
