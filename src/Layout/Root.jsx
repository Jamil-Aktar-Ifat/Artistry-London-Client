import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      <div className="flex-grow  p-4">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
