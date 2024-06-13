"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const item = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Resume",
      link: "/resume",
    },
    {
      id: 3,
      name: "Works",
      link: "/works",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ];

  const location = usePathname();

  return (
    <div className="flex flex-row space-x-5">
      {item.map((item) => (
        <Link
          href={item.link}
          className={`text-lg py-2 ${
            location === item.link
              ? `text-accent-Default border-b-accent-Default border-b-2`
              : ``
          }`}
          key={item.id}>
          <li className="list-none">{item.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
