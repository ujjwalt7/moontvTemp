// 'https://api.themoviedb.org/3/search/multi?query=about%20my%20fath&include_adult=false&page=1'
import { options } from "../values";

export const GetSearch = async(key) => {
    const [keyw,query,page] = key.queryKey;
if(query!=null||query!==''){
        return await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&page=${page}`, options)
        // return await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=true&page=${page}`, options)
          .then((r) => r.json())
          .then((res) => {
            return (res)});
          }
          return {}
}
