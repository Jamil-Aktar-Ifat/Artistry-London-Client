// src/components/ThemeToggle/ThemeToggle.js
import React, { useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // Toggle between dark and light theme
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-800 dark:text-gray-200 focus:outline-none"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <IoSunnyOutline className=" w-6 h-6"></IoSunnyOutline>
      ) : (
        <IoMoonOutline className=" w-6 h-6"></IoMoonOutline>
      )}
    </button>
  );
};

export default ThemeToggle;
