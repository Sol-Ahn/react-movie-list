import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieListPage = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// axios
		// 	.get("https://my-json-server.typicode.com/ruizhen88/demo/movies")
		// 	.then((res) => {
		// 		console.log(res);
		// 		setMovies(res.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});

		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					"https://my-json-server.typicode.com/ruizhen88/demo/movies"
				);
				setMovies(res.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			{loading}
			{movies.map((movie) => (
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
