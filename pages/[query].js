import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import { FetchData } from "../api/FetchData";
import Card from "../components/Carousel/Cards/Card";
import CardSkeleton from "../components/Skeleton/CardSkeleton";
import { tmdbapi } from "../values";

export default function QueryPage() {
  const tempArr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 4, 43];
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));
  const { data, status } = useQuery(
    ["queryPage", router.query.query || "trending_week", page || "1"],
    FetchData
  );
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col gap-4 py-4">
          <div className="w-full flex px-8 justify-between">
            <div className="text-2xl font-medium uppercase">
              {router.query.query}
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`${router.query.query}?page=${
                  page ? (page !== 1 ? page - 1 : page) : "1"
                }`}
                className="px-4 py-2 rounded-lg bg-grey hover:bg-greyLight transition-all duration-200"
              >
                Prev
              </Link>
              <Link
                href={`${router.query.query}?page=${
                  page ? page + 1 : "2"
                }`}
                className="px-4 py-2 rounded-lg bg-grey hover:bg-greyLight transition-all duration-200"
              >
                Next
              </Link>
            </div>
          </div>
          <div className="w-full grid grid-cols-6 px-8 gap-2">
            {status === "success" &&
              data?.map((e, i) => {
                return <Card data={e} key={i} />;
              })}
            {status === "loading" &&
              tempArr.map((e) => <CardSkeleton key={e} />)}
          </div>
          <div className="w-full flex justify-center">
            <div className="flex items-center gap-2">
              <Link
                href={`${router.query.query}?page=${
                  page ? (page !== 1 ? page - 1 : page) : "1"
                }`}
                className="px-4 py-2 rounded-lg bg-grey hover:bg-greyLight transition-all duration-200"
              >
                Prev
              </Link>
              <Link
                href={`${router.query.query}?page=${
                  page ? page + 1 : "2"
                }`}
                className="px-4 py-2 rounded-lg bg-grey hover:bg-greyLight transition-all duration-200"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {params:{query:'trending_today'}},
            {params:{query:'trending_week'}},
            {params:{query:'popular_movies'}},
            {params:{query:'popular_tv'}},
            {params:{query:'toprated_movies'}},
            {params:{query:'toprated_tv'}},
            {params:{query:'nowplaying_movies'}},
            {params:{query:'nowplaying_tv'}},
            {params:{query:'upcoming_movies'}},
            {params:{query:'upcoming_tv'}},
        ],
        fallback:true,
    }
}

export const getStaticProps = async ({params}) => {

    // const {params} = context;
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ["queryPage", params.query || "trending_week","1"],FetchData)

  return {
    props:{
      dehydrateState:dehydrate(queryClient)
    },
  }

}
