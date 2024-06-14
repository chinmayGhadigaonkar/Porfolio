import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
const Home = () => {
  return (
    <div className="flex-1 w-full my-4  ">
      <div className="flex h-full px-5 py-5 flex-col w-full md:flex-row  gap-2  justify-between  ">
        <div className=" flex-1 w-full   md:order-none order-2 md:w-3/5  space-y-2  flex justify-center flex-col items-start sm:text-start">
          <h1 className="text-5xl text-center md:text-start w-full  font-bold  ">
            Hello I'm{" "}
          </h1>
          <h3 className="text-4xl  md:text-start text-center font-bold w-full  text-accent-Default pb-2">
            Chinmay Ghadigaonkar<span className="text-xl">.</span>
          </h3>
          <p className="text-xl text-white/60 sm:text-start pb-4 text-center font-thin">
            {" "}
            I excel at crafting elegant digital experiences and <br />I am
            proficient in various programming languages and frameworks. and
            technology.{" "}
          </p>
          <div className="flex justify-center items-center w-full flex-col sm:justify-start  sm:flex-row space-y-3 sm:space-y-0">
            <a download="cv" href="/CV.pdf">
              <Button size="lg" variant="outline">
                Download CV{" "}
                <span>
                  <FiDownload className="text-4xl  px-2" />
                </span>
              </Button>
            </a>
            <div className="space-x text-2xl  flex pl-2 ">
              <Social />
            </div>
          </div>
        </div>
        <div className=" order-1  py-4   flex-1  h-full  w-full md:w-2/5  md:order-none">
          <Photo />
        </div>
      </div>
    </div>
  );
};

export default Home;
