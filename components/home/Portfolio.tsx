import React from "react";
import { useAppSelector } from "../../redux/hooks";

const PortfolioSection = () => {
  const themeState = useAppSelector((state) => state.darkTheme.mode);
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-evenly py-10">
        {/* Image part */}
        <div className="w-full md:w-1/2 flex flex-col items-start bg-amber-0">
          {/* <Image
            alt="Thinking man"
            src={aboutsectionimg}
            width={500}
            height={500}
            style={{ objectFit: "cover" }} // Replaced 'objectFit' prop (deprecated) with style
          /> */}
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
        <div className="w-full md:w-1/2 text-start px-8 md:px-4">
          <div className="relative flex py-2">
            <div
              className={`flex flex-col items-center gap-2 ${
                themeState === "light" ? "text-gray-dark" : "text-gray-light/70"
              } text-lg`}
            >
              <p className="[writing-mode:vertical-rl] text-xl pt-2 pr-1 animate-pulse">
                MY DIGITAL LAB
              </p>
              <div className="h-10 w-[2px] bg-gray-light/70 items-center hidden md:block"></div>
            </div>
            <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-semibold tracking-wide mb-4">
              Let me <br /> show you some
              <br /> <span className="text-orange">cool</span> stuff <br />{" "}
              <span className="text-orange">I’ve worked on!</span>
            </h1>
          </div>
          <p
            className={`md:w-5/6 ${
              themeState === "light" ? "text-gray-dark" : "text-gray-light/70"
            } tracking-wide text-lg pl-2`}
          >
            We build top-notch websites that stand the test of time. Our clean,
            elegant design and clear documentation ensure a smooth
            experience—even for those without technical expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
