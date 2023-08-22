import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiBookmark } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { FetchById } from "../../../api/FetchById";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { dateConv, options, tmdbimg } from "../../../values";
import CardList from "../../../components/Carousel/Cards/CardList";
// import pfp from '../../../components/assets/img/pfp.png'

export default function InfoPage() {
  const router = useRouter();
  const { data, status } = useQuery(
    ["movie", "movie", router.query.id],
    FetchById
  );

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-6">
        <div className="w-full lg:aspect-[2.3/1] aspect-[1/1] relative overflow-hidden">
          <div className="w-full h-full overflow-hidden ">
            {status === "success" && (
              <Image
                src={tmdbimg.w1280 + data?.backdrop_path}
                className="w-full h-full object-cover object-top "
                width={0}
                height={0}
                sizes="100vw" alt="poster"
              />
            )}
            {status === "loading" && <Skeleton />}
          </div>
          <div className="w-full h-full top-0 left-0 absolute z-[1] bg-gradient-to-b from-bl/0 via-30% via-bl/60 to-70% to-bl p-2">
            <div className="w-full h-full flex justify-center items-end">
              <div className="xl:w-4/5 w-full px-4 md:px-4 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3  justify-start items-center gap-4">
                <div className="w-full aspect-[1/1.6] bg-grey rounded-xl overflow-hidden md:block hidden">
                  {status === "success" && (
                    <Image
                      src={tmdbimg.w1280 + data?.poster_path}
                      className="w-full h-full object-cover object-top"
                      width={0}
                      height={0}
                      sizes="100vw" alt="poster"
                    />
                  )}
                  {status === "loading" && <Skeleton />}
                </div>
                <div className="w-full flex flex-col lg:col-span-4 col-span-3 gap-2">
                  <div className="w-full md:text-3xl text-2xl font-medium">
                    {status === "success" &&
                      (data?.name || data?.title || "Title")}
                    {status === "loading" && (
                      <div className="md:w-1/4 w-full overflow-hidden rounded-lg h-6">
                        <Skeleton />
                      </div>
                    )}
                  </div>
                  <div className="w-full flex gap-2">
                    {status === "success" &&
                      data?.genres?.map((e, i) => (
                        <div className="md:text-[1rem] text-sm" key={i}>
                          {e.name}
                        </div>
                      ))}
                    {status === "loading" && (
                      <div className="md:w-1/2 w-full h-3">
                        <Skeleton />
                      </div>
                    )}
                  </div>
                  {status === "success" && (
                    <div className="w-full flex gap-2 items-center md:text-[1rem] text-xs">
                      <div className="p-2 bg-greenAcent rounded-xl font-medium shadow-[0_0_50px_1px_rgb(74,194,121)]">
                        ⭐ {data?.vote_average?.toString()?.substring(0, 3)}
                      </div>
                      <div className="text-gray-400 uppercase font-medium p-2  bg-white/20 rounded-xl">
                        {data?.original_language}
                      </div>
                      <div className="text-gray-400 md:text-lg text-sm">
                        {dateConv(data?.release_date).month +
                          ", " +
                          dateConv(data?.release_date).year}
                      </div>
                    </div>
                  )}
                  {status === "loading" && (
                    <div className="md:w-1/3 w-full overflow-hidden rounded-lg h-6">
                      <Skeleton />
                    </div>
                  )}
                  <div className="md:w-1/3  w-2/3 text-sm text-gray-400">
                    {status === "success" &&
                      data?.overview?.substring(0, 100) + "...."}
                    {status === "loading" && (
                      <div className="overflow-hidden flex flex-col gap-1">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                      </div>
                    )}
                  </div>
                  <div className="w-full flex items-center gap-2">
                    <Link
                      href={`${router.query.id}/watch`}
                      className="md:py-3 md:px-6 py-2 px-4 transition-all duration-300 text-sm  md:text-[1rem] font-medium bg-blueAcent rounded-xl flex gap-1 items-center shadow-[0_0_50px_1px] hover:shadow-[0_0_55px_5px] hover:shadow-blueAcent shadow-blueAcent"
                    >
                      <div className="md:text-2xl text-lg text-white ">
                        <BsFillPlayFill />
                      </div>
                      <div className="md:flex hidden">

                      Watch Movie
                      </div>
                      <div className="md:hidden">Play</div>
                    </Link>
                    <Link href={`${router.query.id}/trailer`} className="md:py-3 md:px-6 py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md hover:scale-105 transition-all duration-300">
                      Trailer
                    </Link>
                    <div className="md:p-3 p-2 md:text-xl text-lg bg-white/20 rounded-xl backdrop-blur-sm">
                      <BiBookmark />
                    </div>
                    <a
                      href={data?.homepage}
                      target="_blank"
                      className="md:p-3 p-2 md:text-xl text-lg bg-white/20 rounded-xl backdrop-blur-sm"
                    >
                      <AiOutlineLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-6 flex flex-col justify-center items-center py-2 gap-4">
          <div className="md:w-4/5 w-full ">
            <div className="w-full rounded-xl py-2 px-4 flex flex-col bg-grey gap-2">
              <div className="md:text-2xl text-lg font-medium text-gray-200">
                Description
              </div>
              <div className="md:text-[1rem] text-sm text-gray-400">{data?.overview}</div>
            </div>
          </div>
          <div className="md:w-4/5 w-full px-2 flex flex-col justify-center items-center">
            <div className="w-full flex justify-start items-center md:text-2xl text-lg font-medium px-2">
              Casts
            </div>
            <div className=" w-full  grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 ">
              {data?.credits?.cast?.slice(0, 8)?.map((e, i) => {
                return (
                  <div className="flex flex-col p-2 rounded-lg" key={i}>
                    <div className="p-1 flex flex-col gap-1">
                      <div className="w-full aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={e?.profile_path?(tmdbimg.w780 + e?.profile_path):'/assets/img/pfp.jpg'}
                          className="w-full h-full object-cover object-top"
                          width={0}
                          height={0} alt="poster"
                          sizes="100vw"
                        />
                      </div>
                      <div className="text-sm">
                        {e?.name}
                        <div className="text-xs text-gray-400">
                          {e?.character}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-4/5">
            <CardList
              data={data?.similar?.results}
              status={status}
              title="Similar"
              query={"similar"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
