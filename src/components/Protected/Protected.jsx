import React, { useContext } from "react";
import { UserAuthProviderContext } from "../Context/AuthProviderContext";
import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const Protected = ({ children }) => {
  const { loginUserInfo, loading } = useAuth();

  if (loading) {
    return <span className="loading loading-infinity loading-xl"></span>;
  }
  if (!loginUserInfo) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default Protected;
