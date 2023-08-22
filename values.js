export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGE1MjQ3ZDdiNTRhZTgwYTk1MGNlMTA2YzA2OWM4NCIsInN1YiI6IjY0OTVlNWQ4YTI4NGViMDBjNWJkN2RjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F9Ke3MWoIGVWn60701KakrNY13P09kiIShFmbEQCtTw",
  },
};

export const tmdbimg = {
  original: "https://image.tmdb.org/t/p/original/",
  w780: "https://image.tmdb.org/t/p/w780/",
  w1280: "https://image.tmdb.org/t/p/w1280/",
};
export const tmdbapi = {
  trending_week: "https://api.themoviedb.org/3/trending/all/week",
  trending_today: "https://api.themoviedb.org/3/trending/all/day",
  popular_movies: "https://api.themoviedb.org/3/movie/popular",
  nowplaying_movies: "https://api.themoviedb.org/3/movie/now_playing",
  toprated_movies: "https://api.themoviedb.org/3/movie/top_rated",
  upcoming_movies: "https://api.themoviedb.org/3/movie/upcoming",
  popular_tv: "https://api.themoviedb.org/3/tv/popular",
  toprated_tv: "https://api.themoviedb.org/3/tv/top_rated",
  nowplaying_tv: "https://api.themoviedb.org/3/tv/airing_today",
  upcoming_tv: "https://api.themoviedb.org/3/tv/on_the_air",
  moviegenre: "https://api.themoviedb.org/3/discover/movie?with_genres=",
  tvgenre: "https://api.themoviedb.org/3/discover/tv?with_genres=",
};


export const moviePlayerSetUp = ({ id, imdbid, server }) => {
  switch (server) {
    case "vidsrc":
      return `https://vidsrc.to/embed/movie/${id}`;
    case "vidsrc2":
      return `https://vidsrc.me/embed/movie?tmdb=${id}/`;
    case "autoembed":
      return `https://autoembed.to/movie/tmdb/${id}/`;
    case "2embed":
      return `https://www.2embed.cc/embed/${id}/`;
    case "superembed":
      return `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`;
    case "drivedb":
      return `https://databasegdriveplayer.co/player.php?tmdb=${id}`;
    case "dbgo":
      return `https://dbgo.fun/imdb.php?id=${imdbid}`;
    case "gomo":
      return `https://gomo.to/movie/${imdbid}`;
      
  }
};


export const tvPlayerSetup = ({ id, imdbid, server,season,episode }) => {
  switch (server) {
    case "vidsrc":
      return `https://vidsrc.to/embed/tv/${id}/${season}/${episode}`;
    case "vidsrc2":
      return `https://vidsrc.me/embed/tv?tmdb=${id}&season=${season}&episode=${episode}`;
    case "autoembed":
      return `https://autoembed.to/tv/tmdb/${id}-${season}-${episode}`;
    case "2embed":
      return `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`;
    case "superembed":
      return `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1&s=${season}&e=${episode}`;
    case "drivedb":
      return `https://databasegdriveplayer.co/player.php?type=series&tmdb=${id}&season=${season}&episode=${episode}`;
    case "dbgo":
      return `https://dbgo.fun/imdbse.php?id=${imdbid}&s=${season}&e=${episode}`;
    case "gomo":
      return `https://gomo.to/show/${imdbid}/${season<=9?'0'+season:season}-${episode<=9?'0'+episode:episode}`;
      
  }
};

export const genres = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "Western",
  },

  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const monthArr = [
  "Janurary",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const dateConv = (date = "2020-12-20") => {
  const year = date.substring(0, 4);
  const month = monthArr[parseInt(date.substring(5, 7))];
  const d = date.substring(8);
  return {
    year,
    month,
    d,
  };
};
