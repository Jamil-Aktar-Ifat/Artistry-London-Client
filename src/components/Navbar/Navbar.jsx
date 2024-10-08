import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import ThemeToggle from "../ThemeToggle/ThemeToggle"; // Import the ThemeToggle component

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Signed out successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to sign out!",
          icon: "error",
        });
      });
  };

  const navLinks = (
    <div className="flex items-center space-x-3 poppins">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 underline"
            : "text-gray-700 hover:underline dark:text-gray-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/artCraft"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 underline"
            : "text-gray-700 hover:underline dark:text-gray-300"
        }
      >
        Arts & Craft
      </NavLink>
      <NavLink
        to="/addCraft"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 underline"
            : "text-gray-700 hover:underline dark:text-gray-300"
        }
      >
        Add Craft
      </NavLink>
      {user ? (
        <NavLink
          to="/myCrafts"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 underline"
              : "text-gray-700 hover:underline dark:text-gray-300"
          }
        >
          My Crafts
        </NavLink>
      ) : (
        ""
      )}
    </div>
  );

  return (
    <nav className="navbar py-5 max-w-6xl mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        
        <div className="dropdown poppins">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
          >
            {navLinks}
            {user && (
              <button
                onClick={handleSignOut}
                className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Sign Out
              </button>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link
          className="rancho text-4xl font-bold text-gray-800 dark:text-gray-100"
          to="/"
        >
          Artistry London
        </Link>
      </div>

      {/* Navbar Center for Large Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4 poppins">
        {user ? (
          <div className="relative group">
            {/* User Photo with Tooltip */}
            <div
              className="tooltip md:tooltip-right mr-10 md:mr-0"
              data-tip={user.displayName || "User"}
            >
              <img
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt={user.displayName || "User"}
              />
            </div>

            {/* "Log Out" Button */}
            <button
              onClick={handleSignOut}
              className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-1">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline"
                  : "text-gray-700 hover:underline dark:text-gray-300"
              }
            >
              Sign In
            </NavLink>
            <span className="text-gray-500 dark:text-gray-300">/</span>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline"
                  : "text-gray-700 hover:underline dark:text-gray-300"
              }
            >
              Sign Up
            </NavLink>
          </div>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
