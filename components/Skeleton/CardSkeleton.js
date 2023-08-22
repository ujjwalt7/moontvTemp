import React from "react";
import Skeleton from "./Skeleton";

export default function CardSkeleton() {
  return (
    <>
      <div className="w-full flex flex-col  p-1 pb-2 rounded-xl group/cardHover gap-2">
        <div className="w-full aspect-[1/1.5] rounded-lg relative ">
          <div className="w-full h-full absolute top-0 left-0 rounded-2xl z-[0] bg-gray-500 overflow-hidden">
            <Skeleton />
          </div>
        </div>
        <div className="w-full px-4 ">
          <div className="w-full overflow-hidden rounded-lg font-medium text-lg">
            <Skeleton />
          </div>
        </div>
      </div>
    </>
  );
}
