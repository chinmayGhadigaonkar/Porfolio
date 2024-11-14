"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      {/* Image container with rotating glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
            delay: 0.4,
            ease: "easeInOut",
          },
        }}
        className="relative w-[298px] h-[298px] xl:w-[450px] xl:h-[450px] flex justify-center items-center"
      >
        {/* Rotating glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "#00ff99",
            padding: "8px", // Adjust padding for size of the glow
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10, // Adjust for speed of rotation
            ease: "linear",
          }}
        ></motion.div>

        {/* Static Image */}
        <div className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] overflow-hidden rounded-full bg-white">
          <Image
            src="/image/MyImage.png"
            priority
            quality={100}
            fill
            alt="Chinmay Ghadigaonkar"
            className="object-contain rounded-full px-2"
            charSet="image/png"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
