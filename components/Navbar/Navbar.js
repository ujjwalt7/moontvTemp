"use client";
import React from "react";
import { GiMoonClaws } from "react-icons/gi";
import { MdOutlineCategory, MdOutlineMovie } from "react-icons/md";
import { BiHomeAlt, BiSearch } from "react-icons/bi";
import { LuContact } from "react-icons/lu";
import { PiMonitorPlayBold } from "react-icons/pi";
import Link from "next/link";
import {  usePathname } from "next/navigation";
export default function Navbar() {
    const pathname =  usePathname();
  const navLinks = [
    {
      name: "Home",
      link: "/",
      icon: BiHomeAlt,
    },{
      name: "Search",
      link: "/search",
      icon: BiSearch,
    },
    {
      name: "Movies",
      link: "/movie",
      icon: MdOutlineMovie,
    },
    {
      name: "TV Series",
      link: "/tv",
      icon: PiMonitorPlayBold,
    },
     {
      name: "Genres",
      link: "/genres",
      icon: MdOutlineCategory,
    },
  ];
  return (
    <div className="h-full sticky left-0 top-0 px-2 rounded-r-lg bg-grey z-[999] hidden md:block">
      <div className="h-full flex flex-col py-4 justify-between">
      <Link href='/' className="relative group/tooltipNav  flex justify-center items-center">
              <div className={`transition-all duration-300 rounded-lg text-4xl text-blueAcent `}>
          <GiMoonClaws />
              </div>
              <div className="invisible text-lg    absolute bg-blueAcent text-bl p-2 font-medium  rounded-lg z-[99] group-hover/tooltipNav:opacity-100 group-hover/tooltipNav:visible top-[0px] left-[105%] transition-all duration-300 opacity-0">
                MoonTv
              </div>
            </Link>
        {/* <div className="p-2 text-3xl w-full flex justify-center items-center text-blueAcent">
          <GiMoonClaws />
        </div> */}
        <div className="h-full w-full flex flex-col justify-start py-2 gap-4 items-center">
          <div className="h-[2px] rounded-full w-full bg-bl"></div>
          <div className="w-full flex h-full flex-col gap-2">
            {
                navLinks.map((e,i)=>{
                    return (

            <Link href={e.link} className="relative group/tooltipNav" key={i}>
              <div className={`p-3 hover:bg-bl transition-all duration-300 rounded-lg text-2xl text-blueAcent ${pathname===e.link||((e.link!=='/')&&pathname?.includes(e.link))?'activeNavLink':'text-greyLight'} `}>
                <e.icon />
              </div>
              <div className="invisible  absolute bg-black p-2 text-sm font-medium  rounded-lg z-[99] group-hover/tooltipNav:opacity-100 group-hover/tooltipNav:visible top-[10px] left-[105%] transition-all duration-300 opacity-0">
                {e.name}
              </div>
            </Link>
                    );
                })
            }
          </div>
        </div>
        <div className="p-2 text-2xl w-full flex justify-center items-center text-greyLight">
          <LuContact />
        </div>
      </div>
    </div>
  );
}
