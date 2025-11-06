import React from "react";
import Header from "../components/sharedComponents/Header/Header";
import { Outlet } from "react-router";
import Footer from "../components/sharedComponents/Footer/Footer";
import Sidebar from "../components/DeshboardComponent/Sidebar/Sidebar";

const DeshboardLayout = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="w-full">
          <Header></Header>
          <div className="p-6">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DeshboardLayout;
