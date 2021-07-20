import React from "react";
import { Link } from "react-router-dom";

// import MovieList from "./MovieList";
import movieData from "../../../movies.json";

const MovieListPage = () => {
  return (
    <div>
      {movieData.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div>
            <div>Thumbnail {movie.rating}</div>
            <h3>{`${movie.title} (${movie.year})`}</h3>
            <p>{movie.director}</p>
            {movie.categories.map((category) => (
              <span key={Math.random()}>{category} </span>
            ))}
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieListPage;
