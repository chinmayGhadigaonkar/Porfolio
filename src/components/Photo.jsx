"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";

const Photo = () => {
  return (
    <div className=" w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
            delay: 0.4,
            ease: "easeInOut",
          },
        }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 2.4,
              delay: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] mix-blend-lighten">
          <Image
            src="/image/image.png"
            priority
            quality={100}
            fill
            alt="Chinmay Ghadigaonkar"
            className="object-contain rounded-full px-2"
            charSet="image/png"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
