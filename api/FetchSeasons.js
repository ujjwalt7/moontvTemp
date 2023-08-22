import { options } from "../values";

export const FetchSeasons = async (key) => {
    const [keyw,type, id,seasons] = key.queryKey 
  return await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/season/${seasons}`,
    options
  )
    .then((r) => r.json())
    .then((res) => res)
    .catch((err) => {
      console.log("---------------Error-----------------");
      console.log(err);
    });
};
