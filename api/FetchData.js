import { options, tmdbapi } from "../values";

export const FetchData = async(key) => {
  const [keyw, type,page] = key.queryKey 
      return await fetch(`${tmdbapi[type]}?page=${page}`, options)
        .then((r) => r.json())
        .then((res) => {
          // console.log('h')
          return (res['results'])});
}
