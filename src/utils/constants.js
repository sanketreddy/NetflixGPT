export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/170603040?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const MOVIES_LIST_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "spanish",
  },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
