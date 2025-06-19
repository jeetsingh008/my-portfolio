import Image from "next/image";
import React from "react";
import heroImage from "../../public/hero-banner.png";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col xl:flex-row justify-evenly items-center w-full">
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
          height={700}
          width={700}
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Call to action part */}
      <div className="max-xl:absolute max-xl:top-4/5 max-xl:-translate-y-4/5 flex justify-center items-center">
        <div className="flex-col items-center gap-3">
          <p className="text-center text-4xl sm:text-6xl md:text-7xl xl:text-7xl font-semibold tracking-wide">
            From <br /> <span>Concept</span>
            <br />
            to <br /> <span>Creation</span>
            <span className="text-orange animate-pulse font-orbitron">.</span>
          </p>
          <div className="flex justify-center items-center mt-6">
            <button className="border border-orange rounded-sm text-xl lg:text-2xl xl:text-3xl px-3 py-2 hover:bg-orange hover:text-gray-dark transition-colors duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
