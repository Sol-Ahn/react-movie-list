import React from "react";
// import MovieDetail from "./MovieDetail";
import movieData from "../../../movies.json";

const MovieDetailPage = (props) => {
  console.log(props);
  // const movie = movieData[0];
  const movie = movieData.find((movie) => movie.id == props.match.params.id);
  console.log(typeof props.match.params.id);

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
