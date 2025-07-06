"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { darkThemeSlice } from "../redux/slices/darkTheme/darkThemeSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const themeState = useAppSelector((state) => state.darkTheme.mode);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 px-4 py-3 flex justify-between items-center transition-shadow duration-300 mx-8 ${
        scrolled ? "shadow-xl" : ""
      } ${themeState === "dark" ? "bg-gray-dark/80" : "bg-white/80"}`}
    >
      {/* logo part */}
      <div>
        <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-orbitron">
          Jeet<span className="text-orange animate-pulse">.</span>
        </p>
      </div>

      {/* Middle part (links) */}
      <div className="hidden md:block">
        <ul className="flex justify-between items-center gap-4 md:text-lg">
          {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
            <li
              key={item}
              className="border-b border-transparent cursor-pointer hover:border-orange transition-all ease-in-out duration-300"
            >
              {item}
            </li>
          ))}
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
