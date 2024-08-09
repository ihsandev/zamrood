"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";

const Navbar = () => {
  const [updateStyle, setUpdateStyle] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const handleScroll = () => {
    const height = window.scrollY;
    if (height > 150) setUpdateStyle(true);
    else setUpdateStyle(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [updateStyle]);

  return (
    <nav
      className={`transition-all duration-500 h-[82px] md:h-[102px] w-full flex items-center fixed top-0 z-50 ${
        updateStyle
          ? "bg-white md:h-[75px] border-b shadow-md"
          : "bg-transparent border-b-transparent shadow-transparent"
      }`}
    >
      <div className="flex px-4 item-center justify-between md:max-w-screen-lg mx-auto w-full">
        <div
          className={`items-center justify-between hidden ${
            updateStyle ? "md:hidden" : "md:flex"
          }`}
        >
          <Link href="/">
            <Logo variant="white" />
          </Link>
        </div>
        <div
          className={`${
            updateStyle ? "md:flex" : "md:hidden"
          } flex items-center justify-between w-full md:items-start md:justify-start md:w-auto`}
        >
          <Logo />
          <div className="flex md:hidden" onClick={() => setShowSideNav(true)}>
            <Image
              width={50}
              height={50}
              src="/icons/ic_burger-menu.svg"
              alt="Burger Menu"
              className="w-[45px] h-[45px]"
            />
          </div>
        </div>
        <div
          onClick={() => setShowSideNav(false)}
          className={`md:hidden flex fixed top-0 bottom-0 left-0 right-0 bg-zrgreen bg-opacity-50 z-40 transition-all ${
            showSideNav ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        />
        <div className="relative md:static h-full md:flex">
          <div
            className={`flex pt-10 md:pt-0 items-center gap-4 md:gap-3 fixed md:static top-0 bottom-0 md:h-auto right-0 bg-white md:bg-transparent min-w-72 box-border md:w-auto flex-col md:flex-row border-l shadow-sm md:border-l-0 md:shadow-none transition-all ease-in-out duration-300 z-50 ${
              showSideNav
                ? "translate-x-0"
                : "translate-x-full md:translate-x-0"
            }`}
          >
            <span
              className="md:hidden absolute z-10 right-4 top-4 cursor-pointer text-zrgreen"
              onClick={() => setShowSideNav(false)}
            >
              <CircleX size={45} strokeWidth={1} />
            </span>
            <ul
              className={`flex flex-col md:flex-row md:items-center gap-2 ${
                updateStyle ? "md:text-zrdarkgreen" : "md:text-white"
              }`}
            >
              <li>
                <Link
                  onClick={() => setShowSideNav(false)}
                  className={`p-2 md:py-3 md:px-5 transition-all ${
                    updateStyle ? "border-b-zrdarkgreen" : "border-b-white"
                  } md:hover:border-b-2`}
                  href="/"
                >
                  Homepage
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowSideNav(false)}
                  className={`p-2 md:py-3 md:px-5 transition-all ${
                    updateStyle ? "border-b-zrdarkgreen" : "border-b-white"
                  } md:hover:border-b-2`}
                  href="#customize-your-trip"
                >
                  Customize Your Trip
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowSideNav(false)}
                  className={`p-2 md:py-3 md:px-5 transition-all ${
                    updateStyle ? "border-b-zrdarkgreen" : "border-b-white"
                  } md:hover:border-b-2`}
                  href="#destination"
                >
                  Destination
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowSideNav(false)}
                  className="p-2 md:py-3 md:px-5 md:hover:border-b-2"
                  href="#article"
                >
                  Article
                </Link>
              </li>
            </ul>
            <div>
              <Button
                variant="primary"
                size="lg"
                className={`border-zrdarkgreen text-zrdarkgreen md:border-white md:text-white ${
                  updateStyle && "md:border-zrdarkgreen md:text-zrdarkgreen"
                }`}
              >
                Need Assistance?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
