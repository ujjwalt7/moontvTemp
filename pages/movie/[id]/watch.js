import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FetchById } from "../../../api/FetchById";
import { moviePlayerSetUp, tmdbimg } from "../../../values";
import { IoMdCloseCircle } from "react-icons/io";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { FiArrowLeft } from "react-icons/fi";
import { BsFillCloudFill } from "react-icons/bs";
import Link from "next/link";

export default function WatchMovie() {
  const serverlist = [
    {
      title: "Server 1: VidSrc",
      description: "⛔No Ads,Very Fast⚡, But Smaller Libaray(Recommended)",
      server: "vidsrc",
    },
    {
      title: "Server 2: VidSrc",
      description: "Very Less Ads, and Good Libaray(Recommended)",
      server: "vidsrc2",
    },
    {
      title: "Server 3: AutoEmbed",
      description: "Has Very Less Ads, but Multiple Servers👍",
      server: "autoembed",
    },

    {
      title: "Server 4: 2embed",
      description: "Has Ads, but Vast Libaray",
      server: "2embed",
    },
    {
      title: "Server 5: SuperStream",
      description: "Good Libaray",
      server: "superembed",
    },
    {
      title: "Server 6: Gomo",
      description: "Has a very Vast Libaray📚",
      server: "gomo",
    },
    {
      title: "Server 7: DBGo",
      description: "If Nothing Works then have a try on it.",
      server: "dbgo",
    },
    {
      title: "Server 8: Database Drive Player",
      description: "Has Ads, Works SomeTimes🤷‍♂️",
      server: "drivedb",
    },
  ];
  const router = useRouter();
  const { data, status } = useQuery(
    ["movie", "movie", router.query.id],
    FetchById
  );

  const [showServerList, setshowServerList] = useState(false);
  const [currentServer, setcurrentServer] = useState(serverlist[0]);
  const [iframeLoadingState, setiframeLoadingState] = useState(true);
  return (
    <div className="w-screen h-screen relative">
      <div
        className={`absolute ${
          showServerList ? "top-0" : "top-[-100%]"
        } transition-all duration-500 ease-linear left-0 w-full h-full z-[8]`}
      >
        <div className="w-full h-full relative">
          <div className="w-full h-full">
            <Image alt="poster"
              src={tmdbimg.w1280 + data?.backdrop_path}
              className="w-full h-full object-cover object-top "
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="w-full h-full absolute top-0 left-0 z-[1] bg-bl/70">
            <div className="w-full h-full flex justify-center items-center py-4">
              <div className="w-1/3 px-4 py-2 min-h-[50%] max-h-full overflow-y-auto bg-bl rounded-xl">
                <div className="w-full flex justify-between items-center">
                  <div className="text-2xl font-medium">Servers</div>
                  <div
                    className="p-2 bg-grey text-3xl rounded-lg"
                    onClick={() => setshowServerList(false)}
                  >
                    <IoMdCloseCircle />
                  </div>
                </div>
                <div className="w-full flex flex-col px-2 py-2 gap-2">
                  {serverlist.map((e, i) => (
                    <div
                      className="w-full p-1 border border-grey cursor-pointer  rounded-xl"
                      key={i}
                      onClick={() => {
                        setcurrentServer(e);
                        setiframeLoadingState(true);
                        setshowServerList(false);
                      }}
                    >
                      <div
                        className={`w-full px-6 py-3 rounded-xl ${
                          e.server === currentServer.server ? "bg-grey" : ""
                        } transition-all duration-300`}
                      >
                        {/* <div className="w-full px-6 py-3 rounded-xl bg-grey"> */}
                        <div className="text-lg font-medium">{e.title}</div>
                        <div className="text-xs text-gray-400">
                          {e.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="w-full bg-bl">
          <div className="w-full flex px-4 py-2 gap-4 items-center">
            <div className="flex gap-2">
              <Link href={`/movie/${router.query.id}`}
                // onClick={() => window.history.back()}
                className="px-4 hover:bg-grey transition-all duration-300 gap-2 flex items-center py-2 rounded-lg text-sm md:text-lg"
              >
                <div className="md:text-2xl text-lg">
                  <FiArrowLeft />
                </div>
                Go Back
              </Link>
              <div
                onClick={() => {
                  setshowServerList(true);
                }}
                className="px-4 hover:bg-grey transition-all duration-300 gap-2 flex items-center py-2 rounded-lg md:text-lg text-sm border border-greyLight"
              >
                <div className="md:text-2xl text-lg">
                  <BsFillCloudFill />
                </div>
                Servers
              </div>
            </div>
            <div className="w-[2px] self-stretch bg-greyLight rounded-full"></div>
            <div className="flex items-center">
              <div className="md:text-xl text-sm font-medium">
                {data?.title||data?.name||'Title'}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <div
            className={`w-full h-full z-[5] absolute top-0 left-0 ${
              iframeLoadingState ? "inline-block" : "hidden"
            }`}
          >
            <Skeleton />
          </div>
          <iframe
            src={moviePlayerSetUp({
              id: data?.id,
              imdbid: data?.imdb_id,
              server: currentServer.server,
            })}
            className="w-full h-full"
            allowFullScreen
            onLoad={() => {
              setiframeLoadingState(false);
            }}
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
