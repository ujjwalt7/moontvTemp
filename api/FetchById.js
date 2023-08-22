import { options } from "../values";

export const FetchById = async (key) => {
  
  const [keyw,type, id] = key.queryKey 
  return await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?append_to_response=images%2Cvideos%2Ccredits%2Csimilar%2Cseason`,
    options
  )
    .then((r) => r.json())
    .then((res) => res)
    .catch((err) => {
      console.log("---------------Error-----------------");
      console.log(err);
    });
};
