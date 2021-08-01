import React from "react";
import movieData from "../../../movies.json";
import Movie from "../../page/MovieListPage/Movie";

const MovieList = () => {
	return (
		<React.Fragment>
			{movieData.map((movie) => (
				<Movie movie={movie} key={movie.id} />
			))}
		</React.Fragment>
	);
};

export default MovieList;
