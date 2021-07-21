import React from "react";
import { Link } from "react-router-dom";
import movieData from "../../../movies.json";

const MovieListPage = () => {
	return (
		<>
			{movieData.map((movie) => (
				<Link key={movie.id} to={`/detail/${movie.id}`}>
					<div>
						<div>
							Thumbnail <span>{movie.rating}</span>
						</div>
						<h3>{`${movie.title} (${movie.year})`}</h3>
						<p>{movie.director}</p>
						{movie.categories.map((category) => (
							<span key={Math.random()}>{category} </span>
						))}
						<hr />
					</div>
				</Link>
			))}
		</>
	);
};

export default MovieListPage;
