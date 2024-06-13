"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const MobileNav = () => {
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
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-accent-Default font-bold text-[32px] " />
      </SheetTrigger>
      <SheetContent className="flex flex-col  bg-primary ">
        <div className="flex flex-col space-y-10 h-full w-full items-center justify-center ">
          <div className="text-center  ">
            <Link href="/" className="text-4xl  font-bold">
              {" "}
              Chinmay<span className={`text-accent-Default text-2xl`}>.</span>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center space-y-7">
            {item.map((item) => (
              <Link
                href={item.link}
                className={`text-xl py-1 ${
                  location === item.link
                    ? `text-accent-Default border-b-accent-Default border-b-2`
                    : ``
                }`}
                key={item.id}>
                <li className="list-none">{item.name}</li>
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
