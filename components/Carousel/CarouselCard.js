import React from "react";
import { dateConv, genres, tmdbimg } from "../../values";
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import Link from "next/link";

export default function CarouselCard({ data, isActive }) {
  //   const { data: singleData } = useQuery(
  //     ["carousel", data?.id, data?.media_type],
  //     FetchByIdQuery
  //   );
  return (
    <>
      <div
        className={`w-full lg:aspect-[3/1.3] md:aspect-[2/1] aspect-[1/1.4] bg-grey rounded-lg transition-all duration-500 relative ${
          isActive ? "" : "scale-90"
        }`}
      >
        <div className="w-full h-full absolute top-0 left-0 z-0 ">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full relative">
              <div className="w-full h-full absolute top-0 left-0 rounded-lg overflow-hidden">
                <Image
                  src={tmdbimg.w1280 + data?.backdrop_path}
                  className="w-full h-full object-cover hidden md:inline-block"
                  alt={data?.title || data?.name || "Name"}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                <Image
                  src={tmdbimg.w1280 + data?.poster_path}
                  className="w-full h-full object-cover md:hidden"
                  alt={data?.title || data?.name || "Poster"}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div className="w-full h-full absolute top-0 left-0 z-[1] bg-gradient-to-r from-bl via-bl/40 to-bl/0">
                <div className="w-full h-full flex md:justify-center md:py-0 py-2 justify-end gap-2 px-6 flex-col">
                  <div className="md:text-2xl text-lg font-semibold">
                    {data?.title || data?.name}
                  </div>

                  <div className="w-full flex gap-2 items-center text-xs">
                    <div className="p-2 bg-greenAcent rounded-xl font-medium shadow-[0_0_50px_1px_rgb(74,194,121)]">
                      ⭐ {data?.vote_average?.toString()?.substring(0, 3)}
                    </div>
                    <div className="text-gray-400 uppercase font-medium p-2 bg-white/20 rounded-xl">
                      {data?.original_language}
                    </div>
                    <div className="text-gray-400 md:text-sm">
                      {dateConv(data?.release_date).year}
                    </div>
                  </div>
                  <div className="w-full flex gap-2">
                    {data?.genre_ids?.map((e, i) => (
                      <div className="text-sm" key={i}>
                        {genres.find((el) => el.id === e).name}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm w-1/2 text-gray-300 hidden md:inline-block">
                    {data?.overview?.substring(0, 150)}....
                  </div>
                  <div className="text-xs w-2/3 text-gray-300 md:hidden">
                    {data?.overview?.substring(0, 100)}....
                  </div>

                  <div className="w-full flex items-center gap-2">
                    <Link href={`${data?.media_type}/${data?.id}`} className="md:py-3 md:px-6 py-2 px-4 hover:scale-105 transition-all duration-300 text-sm  md:text-[1rem] font-medium bg-blueAcent rounded-xl flex gap-1 items-center shadow-[0_0_50px_1px] shadow-blueAcent">
                      <div className="md:text-xl text-lg text-white ">
                        <BsFillPlayFill />
                      </div>
                      Play Now
                    </Link>
                    <div className="md:p-3 p-2 md:text-xl text-lg bg-white/20 rounded-xl backdrop-blur-sm">
                      <BiBookmark />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-full rounded-lg absolute top-0 left-0 z-[3] bg-bl/60 ${
            isActive ? "hidden" : ""
          }`}
        ></div>
      </div>
    </>
  );
}
