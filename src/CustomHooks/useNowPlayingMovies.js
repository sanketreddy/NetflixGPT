import { API_OPTIONS, MOVIES_LIST_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const moviesData = await fetch(MOVIES_LIST_API, API_OPTIONS);
    const moviesList = await moviesData?.json();
    // console.log(moviesList.results);
    dispatch(addNowPlayingMovies(moviesList?.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;
