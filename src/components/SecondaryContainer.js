import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  return (
    movies && (
      <div className=" bg-black text-white">
        <div className="-mt-56  relative z-24">
          <MovieList title={"Now Playing"} movies={movies} />
        </div>
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
        <MovieList title={"Trending"} movies={movies} />
        <MovieList title={"Horror"} movies={movies} />
      </div>
    )
  );
};

export default SecondaryContainer;
