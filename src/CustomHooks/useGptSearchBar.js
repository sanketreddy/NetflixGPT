import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addError, addGptMovieResult } from "../utils/gptSlice";
import openai from "../utils/openai";
import { loadingSucess, startLoading } from "../utils/moviesSlice";

const useGptSearchBar = (inputBoxData) => {
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movieName) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      if (!data.ok) {
        throw new Error("Failed to fetch movie data");
      }
      const jsonData = await data.json();
      return jsonData.results;
    } catch (error) {
      console.error("Error fetching movie data:", error);
      throw error;
    }
  };

  const handleGptSearch = async () => {
    dispatch(startLoading());
    try {
      const searchText = inputBoxData.current.value;
      const gptQuery =
        "Act as a movie recommendation system and suggest some movies for the query: " +
        searchText +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (!chatCompletion.choices?.length) {
        throw new Error("No reponse from GPT-3");
      }

      const gptMovieList =
        chatCompletion.choices?.[0].message?.content.split(", ") || [];

      const data = gptMovieList.map(async (movie) => {
        try {
          return await searchMovieTmdb(movie);
        } catch (error) {
          console.error(`Error fetching data from movie ${movie}: `, error);
          return [];
        }
      });

      const tmdbResults = await Promise.all(data);
      dispatch(loadingSucess(tmdbResults));
      dispatch(
        addGptMovieResult({
          movieNames: gptMovieList,
          movieResult: tmdbResults,
        })
      );
    } catch (error) {
      console.error("Error in GPT Search:", error);
      dispatch(addError({ message: error.message }));
    }
  };

  return handleGptSearch;
};

export default useGptSearchBar;
