"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { darkThemeSlice } from "../redux/slices/darkTheme/darkThemeSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const themeState = useAppSelector((state) => state.darkTheme.mode);

  return (
    <div className="px-4 py-3 flex justify-between items-center">
      {/* logo part */}
      <div>
        <p className="text-xl md:text-3xl lg:text-4xl xl:text5xl 2xl:text-6xl font-bold font-orbitron">
          Jeet<span className="text-orange">.</span>
        </p>
      </div>

      {/* Middle part (links) */}
      <div className="hidden md:block">
        <ul className="flex justify-between items-center gap-4 md:text-lg">
          <li className="border-b border-transparent cursor-pointer hover:border-orange transition-all ease-in-out duration-300">
            Home
          </li>
          <li className="border-b border-transparent cursor-pointer hover:border-orange transition-all ease-in-out duration-300">
            About
          </li>
          <li className="border-b border-transparent cursor-pointer hover:border-orange transition-all ease-in-out duration-300">
            Skills
          </li>
          <li className="border-b border-transparent cursor-pointer hover:border-orange transition-all ease-in-out duration-300">
            Portfolio
          </li>
          <li className="border-b border-transparent cursor-pointer hover:border-orange transition-all ease-in-out duration-300">
            Contact
          </li>
        </ul>
      </div>

      {/* Right part (dark mode toggle) */}
      <div className="flex items-center justify-between gap-1">
        <div
          onClick={() => dispatch(darkThemeSlice.actions.toggleTheme())}
          className={`w-14 h-7 p-1 relative cursor-pointer transition-colors duration-300 ${
            themeState === "dark" ? "bg-gray-light/10" : "bg-gray-dark/10"
          } rounded-full`}
        >
          <div
            className={`absolute top-1 left-1 w-5 h-5 bg-transparent rounded-full select-none shadow-md transform transition-transform duration-300 flex items-center justify-center text-lg ${
              themeState === "dark" ? "translate-x-0" : "translate-x-7"
            }`}
          >
            {themeState === "dark" ? "🌙" : "☀️"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
