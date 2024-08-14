import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const moviesData = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
    // console.log(moviesData);
    const moviesList = await moviesData?.json();
    // console.log(moviesList.results);
    dispatch(addTopRatedMovies(moviesList?.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
