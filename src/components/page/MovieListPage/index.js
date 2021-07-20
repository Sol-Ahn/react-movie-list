import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import MovieList from "./MovieList";
// import movieData from "../../../movies.json";

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/ruizhen88/demo/movies")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMovies(json);
      });
  }, []);
  return (
    <div>
      {movies.map((movie) => (
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
