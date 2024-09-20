import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img className="" src="/media/404/404.gif" alt="" />
      </div>
      <div className="flex justify-center">
        <Link to="/" className="flex items-center gap-2">
     
            <FaArrowLeftLong></FaArrowLeftLong>
          
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
