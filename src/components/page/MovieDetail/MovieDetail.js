import React from "react";

const MovieDetail = ({ movie }) => {
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

export default MovieDetail;
