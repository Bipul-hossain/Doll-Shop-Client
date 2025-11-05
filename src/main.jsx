import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router";
import AuthProviderContext from "./components/Context/AuthProviderContext";
import ProductProviderContext from "./components/Context/ProductProviderContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviderContext>
      <ProductProviderContext>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </ProductProviderContext>
    </AuthProviderContext>
  </StrictMode>
);
