import React, { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { skillImages, toolsImages } from "../../src/lib/SkillSectionImages";
import Image from "next/image";

type ToggleState = "left" | "right";

const SkillsSection = () => {
  const [isToggled, setIsToggled] = useState<ToggleState>("left");
  const themeState = useAppSelector((state) => state.darkTheme.mode);

  return (
    <div className="py-12 md:py-20 px-4 md:px-8 xl:px-16 flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-0 relative overflow-hidden">
      {/* Text part */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        <div className="text-start px-8 md:px-4">
          <div className="relative flex py-2">
            <div
              className={`flex flex-col items-center gap-2 ${
                themeState === "light" ? "text-gray-dark" : "text-gray-light/70"
              } text-lg`}
            >
              <p className="[writing-mode:vertical-rl] text-xl pt-2 pr-1 animate-pulse">
                MY SKILLS
              </p>
              <div className="h-10 w-[2px] bg-gray-light/70 items-center hidden md:block"></div>
            </div>
            <h1 className="text-3xl pl-2 md:text-5xl 2xl:text-6xl font-semibold tracking-wide mb-4">
              Areas of My <br /> Technical <br /> Proficiency
            </h1>
          </div>
          <p
            className={`md:w-4/6 ${
              themeState === "light" ? "text-gray-dark" : "text-gray-light/70"
            } tracking-wide lg:text-lg pl-2`}
          >
            With these technologies, I build clean, responsive, and
            user-friendly interfaces that help users complete tasks quickly and
            effortlessly.
          </p>
        </div>

        {/* Toggle Switch */}
        <div
          className={`text-xl p-2 mx-6 mt-6 rounded-full ${
            themeState === "light"
              ? "bg-white shadow-md"
              : "bg-gray-dark2 shadow-2xl"
          } cursor-pointer w-52`}
        >
          <div className="relative flex gap-5 px-2 py-1 h-10 items-center justify-between">
            <div
              className={`absolute top-0 left-0 w-1/2 h-full bg-orange rounded-full transition-transform duration-300 ease-in-out transform ${
                isToggled === "right" ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
            <p
              onClick={() => setIsToggled("left")}
              className="z-10 w-1/2 text-center"
            >
              Skills
            </p>
            <p
              onClick={() => setIsToggled("right")}
              className="z-10 w-1/2 text-center"
            >
              Tools
            </p>
          </div>
        </div>
      </div>

      {/* Icons Part */}
      <div className="relative w-full md:w-1/2 min-h-[320px] flex items-start justify-center px-6">
        {/* Shared Flex Layout */}
        {["left", "right"].map((side) => (
          <div
            key={side}
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out 
              ${
                isToggled === side
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              } flex flex-wrap justify-center gap-4`}
          >
            {(side === "left" ? skillImages : toolsImages).map(
              (imageDetails, index) => (
                <div
                  key={index}
                  className={`flex relative group flex-col shadow-lg items-center justify-center basis-1/4 max-w-[100px] p-2 rounded-lg 
                    ${themeState === "light" ? "bg-white" : "bg-gray-dark2"}`}
                >
                  <span className="absolute transition-opacity duration-300 ease-in-out px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 -top-8 left-1/2 transform -translate-x-1/2 bg-orange">
                    {imageDetails.name}
                  </span>
                  <Image
                    src={imageDetails.img}
                    alt={imageDetails.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
