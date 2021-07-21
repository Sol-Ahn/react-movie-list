import React from "react";
import movieData from "../../../movies.json";

const MovieDetailPage = (props) => {
	const movie = movieData.find((movie) => movie.id === +props.match.params.id);

	return (
		<>
			<div>
				<div>Thumbnail</div>
				<strong>감독</strong>
				<p>{movie.director}</p>
				<strong>장르</strong>
				<p>
					{movie.categories.map((category) => (
						<span key={Math.random()}>{category} </span>
					))}
				</p>
			</div>
			<div>
				<h2>
					{`${movie.title}(${movie.year})`}
					<span> {movie.rating}</span>
				</h2>
			</div>
			<div>{movie.summary}</div>
		</>
	);
};

export default MovieDetailPage;
