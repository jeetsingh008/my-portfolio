"use client";
import React, { useState } from "react";

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";

import { ContactUsSchema, ContactUsSchemaType } from "../../schema/ContactUs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector } from "../../redux/hooks";
import { MdEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { IoMdChatbubbles } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const themeState = useAppSelector((state) => state.darkTheme.mode);

  const form = useForm<ContactUsSchemaType>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactUsSchemaType) => {
    console.log(data);
    setSubmitted(true);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        action="https://formspree.io/f/mgvybkoq"
        method="POST"
        className="text-white flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className={`text-[1rem] ${
                  themeState === "dark" ? "text-white" : "text-gray-dark"
                } tracking-wide`}
              >
                Name
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <FaUser
                    className={`absolute left-2 top-1/2 -translate-y-1/2 ${
                      themeState === "dark"
                        ? "text-gray-light/50"
                        : "text-gray-dark/30"
                    }`}
                  />
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className={`pl-8 py-5 ${
                      themeState === "dark"
                        ? "placeholder:bg-gray-dark bg-gray-dark"
                        : "placeholder:bg-gray-light bg-gray-light text-black"
                    }`}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className={`text-[1rem] ${
                  themeState === "dark" ? "text-white" : "text-gray-dark"
                } tracking-wide`}
              >
                Email
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <MdEmail
                    className={`absolute left-2 top-1/2 -translate-y-1/2 ${
                      themeState === "dark"
                        ? "text-gray-light/50"
                        : "text-gray-dark/30"
                    }`}
                  />
                  <Input
                    placeholder="you@example.com"
                    {...field}
                    className={`pl-8 py-5 ${
                      themeState === "dark"
                        ? "placeholder:bg-gray-dark bg-gray-dark"
                        : "placeholder:bg-gray-light bg-gray-light text-black"
                    }`}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className={`text-[1rem] ${
                  themeState === "dark" ? "text-white" : "text-gray-dark"
                } tracking-wide`}
              >
                Phone
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <ImPhone
                    className={`absolute left-2 top-1/2 -translate-y-1/2 ${
                      themeState === "dark"
                        ? "text-gray-light/50"
                        : "text-gray-dark/30"
                    }`}
                  />
                  <Input
                    placeholder="+1 222 222 2222"
                    {...field}
                    className={`pl-8 py-5 ${
                      themeState === "dark"
                        ? "placeholder:bg-gray-dark bg-gray-dark"
                        : "placeholder:bg-gray-light bg-gray-light text-black"
                    }`}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel
                className={`text-[1rem] ${
                  themeState === "dark" ? "text-white" : "text-gray-dark"
                } tracking-wide`}
              >
                Message
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <IoMdChatbubbles
                    className={`absolute left-2 top-3 scale-105 ${
                      themeState === "dark"
                        ? "text-gray-light/50"
                        : "text-gray-dark/30"
                    }`}
                  />
                  <Textarea
                    placeholder="Type your message"
                    {...field}
                    className={`pl-8 resize-none ${
                      themeState === "dark"
                        ? "placeholder:bg-gray-dark bg-gray-dark"
                        : "placeholder:bg-gray-light bg-gray-light text-black"
                    }`}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center">
          <Button
            type="submit"
            className={`w-full ${
              themeState === "dark"
                ? "bg-white hover:bg-gray-light text-gray-dark"
                : "bg-black hover:bg-gray-dark text-white"
            } tracking-wide`}
          >
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
