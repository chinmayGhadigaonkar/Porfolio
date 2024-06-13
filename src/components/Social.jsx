import Link from "next/link";
import React from "react";
import { FiLinkedin, FiTwitter, FiGithub, FiInstagram } from "react-icons/fi";

const Social = () => {
  return (
    <div className="space-x text-2xl my-auto space-x-5 flex pl-2 ">
      <Link
        target="_blank"
        className=" px-1 py-1 h-9 border rounded-full border-accent-Default text-accent-Default hover:bg-accent-Default hover:text-primary"
        href="https://www.linkedin.com/in/chinmay-ghadigaonkar-0b1b3b1b1/">
        <FiLinkedin className="text-1xl px-1  " />
      </Link>
      <Link
        target="_blank"
        className=" px-1 py-1 h-9 border rounded-full border-accent-Default text-accent-Default hover:bg-accent-Default hover:text-primary"
        href="">
        <FiTwitter className="text-1xl px-1  " />
      </Link>
      <Link
        target="_blank"
        className=" px-1 py-1 h-9  border rounded-full border-accent-Default text-accent-Default hover:bg-accent-Default hover:text-primary"
        href="">
        <FiGithub className="text-1xl px-1   " />
      </Link>
      <Link
        target="_blank"
        className=" px-1 py-1 h-9 border rounded-full border-accent-Default text-accent-Default hover:bg-accent-Default hover:text-primary"
        href="">
        <FiInstagram className="text-1xl px-1  " />
      </Link>
    </div>
  );
};

export default Social;
