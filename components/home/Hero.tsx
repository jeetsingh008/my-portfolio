"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import heroImage from "../../public/hero-banner.png";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { useAppSelector } from "../../redux/hooks";

const HeroSection = () => {
  const themeState = useAppSelector((state) => state.darkTheme.mode);
  return (
    <div className="relative flex flex-col md:flex-row justify-evenly items-center w-full">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 flex flex-col items-center gap-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange transition-colors duration-300 ease-in-out"
        >
          <SlSocialFacebook className="h-[26px] w-[26px]" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange transition-colors duration-300 ease-in-out"
        >
          <RiTwitterXFill className="h-6 w-6" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange transition-colors duration-300 ease-in-out"
        >
          <CiInstagram className="h-6 w-6" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange transition-colors duration-300 ease-in-out"
        >
          <CiLinkedin className="h-6 w-6" />
        </a>
        <div className="w-[2px] h-10 bg-gray-light"></div>
      </div>
      {/* Image part */}
      <div className="select-none">
        <Image
          alt="Hero Image"
          src={heroImage}
          height={600}
          width={600}
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Call to action part */}
      <div className="max-md:absolute max-md:top-4/5 max-md:-translate-y-4/5 flex justify-center items-center">
        <div className="flex-col items-center gap-3">
          <span
            className={`text-center ${
              themeState === "light" ? "text-white md:text-black" : ""
            } text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold tracking-wide`}
          >
            I{" "}
            <span className="inline-block text-orange">
              <Typewriter
                options={{
                  strings: ["Design", "Code", "Develop", "Create"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>{" "}
            <br />
            <h2 className="text-nowrap">
              <span className="text-orange">You</span> grow
              <span className="font-orbitron">.</span>
            </h2>
          </span>

          <div className="flex justify-center items-center mt-6">
            <button className="border border-orange rounded-sm text-xl lg:text-2xl xl:text-3xl px-3 py-2 hover:bg-orange hover:text-gray-dark transition-colors duration-300 ease-in-out">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
