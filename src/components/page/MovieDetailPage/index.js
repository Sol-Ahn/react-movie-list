import React, { useState, useEffect } from "react";
// import MovieDetail from "./MovieDetail";
import movieData from "../../../movies.json";

const MovieDetailPage = (props) => {
  console.log(props);
  // const movie = movieData[0];
  // const movie = movieData.find((movie) => movie.id == props.match.params.id);
  console.log(typeof props.match.params.id);

  const [movie, setMovie] = useState(undefined);
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/ruizhen88/demo/movies/${props.match.params.id}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
      });
  }, [props.match.params.id]);

  if (!movie) return <>is Loading</>;

  return (
    <React.Fragment>
      <div>
        <div>Thumbnail</div>
        <strong>감독</strong>
        <p>{movie.director}</p>

        <strong>장르</strong>
        {movie.categories.map((category) => (
          <span key={Math.random()}>{category} </span>
        ))}
      </div>
      <div>
        <h2>
          {`${movie.title}(${movie.year})`} <span>{movie.rating}</span>
        </h2>
      </div>
      <div>{movie.summary}</div>
    </React.Fragment>
  );
};

export default MovieDetailPage;
