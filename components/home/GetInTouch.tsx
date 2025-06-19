import Image from "next/image";
import React from "react";
import thinkingman from "../../public/thinking-man.png";
import { useAppSelector } from "../../redux/hooks";

const GetInTouch = () => {
  const themeState = useAppSelector((state) => state.darkTheme.mode);
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-evenly py-8">
        {/* Image part */}
        {/* Set width to 100% on small screens and 50% (w-1/2) on md and above */}
        {/* Added flex + justify-center to center the image horizontally in its container */}
        <div className="w-full md:w-1/2 flex flex-col items-start bg-amber-0">
          <Image
            alt="Thinking man"
            src={thinkingman}
            width={600}
            height={600}
            style={{ objectFit: "cover" }} // Replaced 'objectFit' prop (deprecated) with style
          />
          <div className="flex gap-2 justify-start items-center pl-12">
            <button className="border border-white hover:border-black rounded-sm text-xl px-3 py-2 hover:bg-white hover:text-gray-dark transition-colors duration-300 ease-in-out">
              HIRE ME
            </button>
            <button className="border border-orange rounded-sm text-xl px-3 py-2 hover:bg-orange hover:text-gray-dark transition-colors duration-300 ease-in-out">
              DOWNLOAD CV
            </button>
          </div>
        </div>

        {/* Text part */}
        {/* Also set width to 50% on md and above to match the image side */}
        {/* Added horizontal padding (px-4) for better spacing */}
        <div className="w-full md:w-1/2 text-start px-8 md:px-4">
          <div className="relative flex py-2">
            <div
              className={`flex flex-col items-center gap-2 ${
                themeState === "light" ? "text-gray-dark" : "text-gray-light/70"
              } text-lg`}
            >
              <p className="[writing-mode:vertical-rl] text-xl pt-2 pr-1 animate-pulse">
                About Us
              </p>
              <div className="h-10 w-[2px] bg-gray-light/70 items-center hidden md:block"></div>
            </div>
            <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-semibold tracking-wide mb-4">
              Need <br /> Something Built? <br />{" "}
              <span className="text-orange/80">Reach Out!</span>
            </h1>
          </div>
          <p
            className={`md:w-5/6 ${
              themeState === "light" ? "text-gray-dark" : "text-gray-light/70"
            } tracking-wide text-lg pl-2`}
          >
            Hi, I'm Jeet Singh — a developer passionate about building clean,
            functional web applications. I thrive on transforming ideas into
            reality through creative and efficient solutions. I'm constantly
            exploring new tools, skills, and technologies to expand my
            expertise. Beyond developing solo full-stack projects, I’ve also
            collaborated on complex team-based projects involving daily
            stand-ups, effective communication, version control, and project
            management workflows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
