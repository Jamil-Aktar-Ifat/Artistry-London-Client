import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MarqueeC from "../components/Marquee/MarqueeC";

const Root = () => {
  return (
    <div className="bg-[#F8F7F4] min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto">
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex-grow">
        <Outlet />
      </div>
      <MarqueeC></MarqueeC>

      {/* Footer */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
