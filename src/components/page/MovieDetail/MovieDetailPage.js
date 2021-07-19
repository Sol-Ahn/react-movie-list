import React from "react";
import MovieDetail from "./MovieDetail";
import movieData from "../../../movies.json";

const MovieDetailPage = () => {
	const movie = movieData[0];

	return (
		<React.Fragment>
			<MovieDetail movie={movie} key={movie.id} />
		</React.Fragment>
	);
};

export default MovieDetailPage;
