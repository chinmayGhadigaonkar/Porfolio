"use client";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const contact = () => {
  const info = [
    {
      title: "Phone No",
      description: "(+91) 8591244736",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Email",
      description: "ghadigaonkarchinmay@gamil.com",
      icon: <FaEnvelope />,
    },
    {
      title: "Address",
      description: "07,Satya Vijay Chawl,Dahisar(East),Mumbai-400068.",
      icon: <FaMapMarkerAlt />,
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex  flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent-Default">Contact Us</h3>
              <p className="text-white/60">
                lorem ipsum doloar sit amet consectetue abipising elit. Eum
                nihil sapinente pariatur id toteam
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phoneno" placeholder="Phone No" />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-40 h-12">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[62px] h-[62px]  xl:w-[72px] xl:h-[72px]  bg-[#27272c] text-accent-Default rounded-md flex  items-center justify-center gap-3">
                      <div className="text-[26px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-md text-white sm:text-lg ">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
