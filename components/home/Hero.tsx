import Image from "next/image";
import React from "react";
import heroImage from "../../public/hero-banner.png";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col xl:flex-row justify-evenly items-center w-full">
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
          <p className="text-center text-4xl sm:text-6xl md:text-7xl xl:text-7xl font-bold tracking-wide font-orbitron">
            From <br /> <span>Concept</span>
            <br />
            to <br /> <span>Creation</span>
          </p>
          <div className="flex justify-center items-center m-5">
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
