import { options, tmdbapi } from "../values";

export const FetchByGenre = async (key) => {
  const [keyw,genreid,type, page] = key.queryKey 
  console.log(`${tmdbapi[type]+genreid}&page=${page}`)
  return await fetch(`${tmdbapi[type]+genreid}&page=${page}`, options)
    .then((r) => r.json())
    .then((res) => {
      console.log(res)
      return res});
};
