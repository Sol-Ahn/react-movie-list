import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieDetailPage = (props) => {
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(false);
	const movieId = props.match.params.id;

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					`https://my-json-server.typicode.com/ruizhen88/demo/movies/${movieId}`
				);
				setMovie(res.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [movieId]);
	return (
		<>
			{loading}
			<div>
				<div>Thumbnail</div>
				<strong>감독</strong>
				<p>{movie.director}</p>
				<strong>장르</strong>
				<p>{movie.categories}</p>
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
