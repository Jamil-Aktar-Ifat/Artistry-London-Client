import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="bg-[#F8F7F4]">
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
