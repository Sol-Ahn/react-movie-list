import React from "react";

const Movie = ({ movie }) => {
	return (
		<div>
			<div>Thumbnail {movie.rating}</div>
			<h3>{`${movie.title} (${movie.year})`}</h3>
			<p>{movie.director}</p>
			{movie.categories.map((category) => (
				<span key={Math.random()}>{category} </span>
			))}
			<hr />
		</div>
	);
};

export default Movie;
