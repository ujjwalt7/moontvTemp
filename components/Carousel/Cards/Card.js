import React from "react";
import { BsFillPlayFill, BsPlayFill } from "react-icons/bs";

import { BiBookmark } from "react-icons/bi";
import Image from "next/image";
import { dateConv, genres, tmdbimg } from "../../../values";
import Link from "next/link";

export default function Card({ data,type }) {
  return (
    <>
      <Link href={`/${data?.media_type||type}/${data?.id}`} className="w-full flex flex-col  p-1 pb-2 hover:bg-grey transition-all duration-500 rounded-xl group/cardHover gap-2">
        <div className="w-full aspect-[1/1.5] rounded-lg relative ">
          <div className="w-full h-full absolute top-0 left-0 rounded-2xl z-[0] bg-gray-500 overflow-hidden">
            <Image
              src={tmdbimg.w780 + data?.poster_path}
              className="w-full h-full object-cover"
              width={0}
              height={0} alt="poster"
              sizes="100vw"
              //  placeholder="blur"
            />
          </div>
          <div className="w-full opacity-0 transition-all duration-500 group-hover/cardHover:opacity-100 flex h-full absolute top-0 z-[1] left-0 bg-black/20 backdrop-blur-sm rounded-2xl justify-center items-center">
            <div className="md:text-4xl text-2xl p-3 rounded-full bg-black/60 text-blueAcent backdrop-blur-lg">
              <BsPlayFill />
            </div>
          </div>
          <div className="absolute top-2 left-2 z-[2] bg-greenAcent p-2 text-xs rounded-lg">
            ⭐ {data?.vote_average?.toString()?.substring(0, 3)}
          </div>
          <div className="absolute right-2 bottom-2 flex z-[2] opacity-0 transition-all duration-300 invisible group-hover/cardHover:visible group-hover/cardHover:opacity-100">
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm md:text-xl  ">
              <BiBookmark />
            </div>
          </div>
        </div>
        <div className="w-full px-2">
          <div className="w-full font-medium text-sm md:text-lg">
            {data?.title || data?.name}
          </div>
          <div className="text-xs text-gray-400 w-full gap-1 flex items-center">
            {data?.genre_ids?.slice(0, 1)?.map((e, i) => (
              <div className="" key={i}>
                {genres.find((el) => el.id === e).name}
              </div>
            ))}
            <div className="self-stretch w-[1px] bg-gray-300"></div>
          <div className="">{dateConv(data?.release_date).year}</div>
          </div>
          {/* <div className="w-full flex text-xs">
          </div> */}
        </div>
      </Link>
    </>
  );
}
