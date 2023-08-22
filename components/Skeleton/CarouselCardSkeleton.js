import React from 'react'
import Skeleton from './Skeleton'

export default function CarouselCardSkeleton({isActive}) {
  return (<>
    <div
      className={`w-full lg:aspect-[3/1.3] md:aspect-[2/1] aspect-[1/1.4]  bg-grey rounded-lg transition-all duration-500 relative ${
        isActive ? "" : "scale-90"
      }`}
    >
      <div className="w-full h-full absolute top-0 left-0 z-0 ">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <div className="w-full h-full relative">
            <div className="w-full h-full absolute top-0 left-0 rounded-lg overflow-hidden">
              <Skeleton />
            </div>
            <div className="w-full h-full absolute top-0 left-0 z-[1] bg-gradient-to-r from-bl via-bl/40 to-bl/0">
              <div className="w-full h-full flex justify-center gap-2 px-6 flex-col">
                <div className="w-1/3 text-2xl font-semibold overflow-hidden">
                  <Skeleton />
                </div>

                <div className="w-1/4 flex gap-2 items-center  overflow-hidden  rounded-lg">
                  <Skeleton />
                </div>
                <div className="w-1/2 flex gap-2  overflow-hidden  rounded-lg">
                  <Skeleton />
                </div>
                <div className="text-sm w-1/2 text-gray-300  overflow-hidden rounded-lg">
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
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
  )
}
