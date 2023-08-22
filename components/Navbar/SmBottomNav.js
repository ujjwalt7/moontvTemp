import React from "react";
import { MdOutlineCategory } from "react-icons/md";
import { BiHomeAlt, BiSearch } from "react-icons/bi";
import {  usePathname } from "next/navigation";

export default function SmBottomNav() {
    const pathname =  usePathname();
  const navLinks = [
    {
      name: "Home",
      link: "/",
      icon: BiHomeAlt,
    },
    {
      name: "Search",
      link: "/search",
      icon: BiSearch,
    },
    {
      name: "Genres",
      link: "/genres",
      icon: MdOutlineCategory,
    },
  ];
  return (
    <div className="w-full fixed z-[99] bottom-0 left-0 bg-bl/60 backdrop-blur-lg py-2 px-4 md:hidden">
      <div className="w-full items-stretch grid grid-cols-3">
        {navLinks.map((e, i) => {
          return (
            <div className="w-full flex justify-center items-center" key={i}>
              <div className={`p-3 rounded-full text-3xl hover:bg-grey transition-all duration-300 text-blueAcent ${pathname===e.link?'':'text-greyLight'} `}>
                <e.icon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
