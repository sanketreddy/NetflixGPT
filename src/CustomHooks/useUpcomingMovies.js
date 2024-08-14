import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const moviesData = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    // console.log(moviesData);
    const moviesList = await moviesData?.json();
    // console.log(moviesList.results);
    dispatch(addUpcomingMovies(moviesList?.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
