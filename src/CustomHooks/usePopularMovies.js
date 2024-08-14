import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const moviesData = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const moviesList = await moviesData?.json();
    // console.log(moviesList.results);
    dispatch(addPopularMovies(moviesList?.results));
  };

  useEffect(() => {
    if (!popularMovies) {
      getPopularMovies();
    }
  }, []);
};

export default usePopularMovies;
