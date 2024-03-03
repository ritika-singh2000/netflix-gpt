import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="py-4 text-3xl font-medium">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-3">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
