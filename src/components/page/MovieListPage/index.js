import React from "react";
import { Link } from "react-router-dom";

import MovieList from "./MovieList";

const MovieListPage = () => {
	return (
		<div>
			<Link to="/detail">
				<MovieList />
			</Link>
		</div>
	);
};

export default MovieListPage;
