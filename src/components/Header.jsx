import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

const Header = () => {
  return (
    <div className="flex justify-between px-5 h-24 items-center  ">
      <div className="logo">
        <Link href="/" className="text-3xl font-bold">
          {" "}
          Chinmay<span className={`text-accent-Default text-2xl`}>.</span>
        </Link>
      </div>
      <div className="sm:flex hidden  sm:space-x-8">
        <div>
          <Nav />
        </div>
        <div>
          <Button>Hire Me</Button>
        </div>
      </div>

      <div className="sm:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
