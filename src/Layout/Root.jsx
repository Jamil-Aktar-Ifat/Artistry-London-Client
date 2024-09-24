import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Navbar Section */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow max-w-6xl mx-auto p-4">
        <Outlet />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Root;
