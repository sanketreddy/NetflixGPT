import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { loading } = useSelector((store) => store.movies);
  const { movieResults, movieNames } = gpt;

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {loading && <Shimmer />}
      <div>
        {!loading && movieNames.length > 0 && (
          <>
            {movieNames.map((movieName, index) => {
              // console.log(movie);
              return (
                <MovieList
                  key={movieName}
                  title={movieName}
                  movies={movieResults[index]}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
