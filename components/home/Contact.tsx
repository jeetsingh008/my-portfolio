import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";

import ContactForm from "./ContactForm";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const themeState = useAppSelector((state) => state.darkTheme.mode);
  return (
    <div className="py-12 md:py-20 px-4 md:px-8 xl:px-16 flex flex-col md:flex-row justify-evenly items-center gap-4 md:gap-0 relative overflow-hidden">
      {/* Text part */}
      <div className="flex flex-col gap-4 items-start">
        <div className="text-start px-8 md:px-4">
          <div className="relative flex py-2">
            <div
              className={`flex flex-col items-center gap-2 ${
                themeState === "light" ? "text-gray-dark" : "text-gray-light/70"
              } text-lg`}
            >
              <p className="[writing-mode:vertical-rl] text-xl pt-2 pr-1 animate-pulse">
                CONTACT
              </p>
              <div className="h-10 w-[2px] bg-gray-light/70 items-center hidden md:block"></div>
            </div>
            <h1 className="text-3xl pl-2 md:text-5xl 2xl:text-6xl font-semibold tracking-wide mb-4">
              Have an idea? <br /> Let&apos;s bring it to life <br />{" "}
              <span className="text-xl md:text-3xl 2xl:text-4xl font-orbitron animate-pulse">
                drop me a message!
              </span>
            </h1>
          </div>
          <p
            className={`md:w-4/6 ${
              themeState === "light" ? "text-gray-dark" : "text-gray-light/70"
            } tracking-wide lg:text-lg pl-2`}
          >
            I&apos;d love to hear from you! Share your details through the form, and
            I&apos;ll connect with you soon.
          </p>
        </div>

        {/* info part */}

        <div
          className={`flex flex-col gap-4 items-start text-start px-10 md:px-6 ${
            themeState === "dark" ? "text-gray-light" : "text-gray-dark"
          }`}
        >
          <div className="flex flex-col gap-1">
            <h5 className="font-bold text-lg py-2 flex gap-2 items-center">
              <span>
                <HiOutlinePhone />
              </span>
              Phone:
            </h5>
            <p
              className={`${
                themeState === "dark" ? "text-gray-light/70" : "text-gray-dark2"
              }`}
            >
              +91-8709680875
            </p>
            <p
              className={`${
                themeState === "dark" ? "text-gray-light/70" : "text-gray-dark2"
              }`}
            >
              +91-9279832889
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="font-bold text-lg flex gap-2 py-2 items-center">
              <span>
                <HiOutlineMail />
              </span>
              Email:
            </h5>
            <p
              className={`${
                themeState === "dark" ? "text-gray-light/70" : "text-gray-dark2"
              }`}
            >
              iamjeetsingh46@gmail.com
            </p>
            <p
              className={`${
                themeState === "dark" ? "text-gray-light/70" : "text-gray-dark2"
              }`}
            >
              iamjeet46@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Form part */}
      <div className="w-5/6 md:w-10/12 lg:w-8/12 xl:w-1/2 2xl:w-3/5">
        <Card
          className={`${
            themeState === "dark" ? "bg-gray-dark2" : "bg-white"
          } px-6 outline-none border-none shadow-2xl`}
        >
          <ContactForm />
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;
