"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [enable, setEnable] = useState(false);
  return (
    <div className="px-4 py-3 flex justify-between items-center text-gray-light">
      {/* logo part */}
      <div>
        <p className="text-xl md:text-3xl lg:text-4xl xl:text5xl 2xl:text-6xl font-bold font-orbitron">
          Jeet<span className="text-orange">.</span>
        </p>
      </div>

      {/* Middle part(links) */}
      <div className="text-white hidden md:block">
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
      {/* Right part(dark mode toggle) */}
      <div className="flex items-center justify-between gap-1">
        <div className="w-14 p-1 bg-gray-light/10 rounded-full">
          <div className="relative w-5 h-5 overflow-hidden rounded-full">
            <div className="w-full h-full bg-[#d0e7f5] rounded-full"></div>
            <div className="absolute -top-1 left-2 w-full h-full bg-gray-dark/90 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
