import { useRouter } from "next/router";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function Trailer() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen relative">
      <div className="w-full py-8 px-6 absolute top-0 left-0 bg-gradient-to-t from-black/0 to-black">
        <div className="w-full flex  items-center">
          <div onClick={()=>{
            router.back()
          }} className="px-4 py-2 bg-blueAcent rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:scale-110 transition-all duration-300">
            <div className="text-xl">
              <FiArrowLeft />
            </div>
            Back
          </div>
          <div className="w-full flex justify-center items-center text-2xl">
            Trailer
          </div>
        </div>
      </div>
      <iframe
        src={` https://autoembed.to/trailer/tv/${router.query.id}`}
        className="w-full h-full"
        frameborder="0"
      ></iframe>
    </div>
  );
}
