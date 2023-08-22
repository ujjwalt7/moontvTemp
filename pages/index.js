import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { FetchData } from "../api/FetchData";
import CardList from "../components/Carousel/Cards/CardList";
import Carousel from "../components/Carousel/Carousel";
import TopNav from "../components/Navbar/TopNav";
import { options, tmdbapi } from "../values";

export const getStaticProps = async () => {
  
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['trending_week','trending_week','1'],FetchData)
  await queryClient.prefetchQuery(['trending_today','trending_today','1'],FetchData)
  await queryClient.prefetchQuery(['popular_tv','toprated_tv','1'],FetchData)
  await queryClient.prefetchQuery(['popular_movies','popular_movies','1'],FetchData)
  await queryClient.prefetchQuery(['upcoming_movies','upcoming_movies','1'],FetchData)
  await queryClient.prefetchQuery(['toprated_movies','toprated_movies','1'],FetchData) 

  return {
    props:{
      dehydrateState:dehydrate(queryClient)
    }
  }
}
export default function Home() {
  const {data:carouselData,status:loadingCarouselData} = useQuery(['trending_week','trending_week','1'],FetchData)
  const {data:trendingTodayData,status:trendingTodayLoading} = useQuery(['trending_today','trending_today','1'],FetchData)
  const {data:popularTvData,status:popularTvLoading} = useQuery(['popular_tv','toprated_tv','1'],FetchData)
  const {data:popMovies,status:popMoviesStatus} = useQuery(['popular_movies','popular_movies','1'],FetchData)
  const {data:upData,status:upStatus} = useQuery(['upcoming_movies','upcoming_movies','1'],FetchData)
  const {data:ogData,status:ogStatus} = useQuery(['toprated_movies','toprated_movies','1'],FetchData)
  return (
    <>
    <div className="w-full">
      <TopNav />
    </div>
    <main className="w-full">
      <Carousel data={carouselData} status={loadingCarouselData}/>
      <div className="w-full flex flex-col py-4 gap-4">
        {/* <Skel */}
        <CardList title="Trending Today" data={trendingTodayData} status={trendingTodayLoading} query='trending_today' />
        <CardList title="Popluar Movies" data={popMovies} status={popMoviesStatus} query='popular_movies' type="movie"/>
        <CardList title="Popluar TV Shows" data={popularTvData} status={popularTvLoading} query='toprated_tv' type="tv"/>
        <CardList title="Upcoming Movies/Shows" data={upData} status={upStatus} query='upcoming_movies' type="movie"/>
        <CardList title="OG Movies😎" data={ogData} status={ogStatus} query='toprated_movies' type="movie"/>
      </div>
    </main>
    </>
  )
}
