import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Login from "../components/Authorization/Login/Login";
import Registration from "../components/Authorization/Registration/Registration";
import Protected from "../components/Protected/Protected";
import ProductUploadForm from "../components/PrivateRoute/ProductUploadForm";
import Card from "../components/PrivateRoute/Card";
import DeshboardLayout from "../Layout/DeshboardLayout";
import Deshoboard from "../components/DeshboardComponent/Deshoboard/Deshoboard";
import MyProduct from "../components/DeshboardComponent/MyProduct/MyProduct";
import ProductEdit from "../components/DeshboardComponent/ProductEdite/ProductEdit";

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
    ],
  },
  {
    path: "/dashboard",
    Component: DeshboardLayout,
    children: [
      {
        index: true,
        element: (
          <Protected>
            <Deshoboard></Deshoboard>
          </Protected>
        ),
      },
      {
        path: "/dashboard/card",
        element: (
          <Protected>
            <Card></Card>
          </Protected>
        ),
      },
      {
        path: "/dashboard/product/upload",
        element: (
          <Protected>
            <ProductUploadForm></ProductUploadForm>
          </Protected>
        ),
      },
      {
        path: "/dashboard/product",
        element: (
          <Protected>
            <MyProduct></MyProduct>
          </Protected>
        ),
      },
      {
        path: "/dashboard/product/edit/:id",
        element: (
          <Protected>
            <ProductEdit></ProductEdit>
          </Protected>
        ),
      },
    ],
  },
]);
