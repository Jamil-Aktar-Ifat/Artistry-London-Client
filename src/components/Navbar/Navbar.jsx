import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <div className="flex gap-3">
      <NavLink>Home</NavLink>
      <NavLink>Home</NavLink>
      <NavLink>Home</NavLink>
      <NavLink>Home</NavLink>
      <NavLink>Home</NavLink>
    </div>
  );
  return (
    <div className="navbar flex justify-between ">
      <div className="lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className=" menu-horizontal px-1">{navLinks}</ul>
      </div>
      <p className=" text-xl">Artistry London</p>
      <div className="">
        <a className="border p-2">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
