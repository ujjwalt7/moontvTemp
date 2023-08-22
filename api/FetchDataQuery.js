import { options, tmdbapi } from "../values";

export const FetchDataQuery = async({type='trending_week',page='1'}) => {
      return await fetch(`${tmdbapi[type]}?page=${page}`, options)
        .then((r) => r.json())
        .then((res) => {
          return (res)});
}
