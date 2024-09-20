import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Section */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow max-w-6xl mx-auto">
        <Outlet />
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
