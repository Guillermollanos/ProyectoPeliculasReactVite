import React, { useEffect } from 'react';
import { useState } from 'react';
import { getMovie } from '../data/HttpClient';
import MovieCard from './MovieCard';

const ContextMovieCard = () => {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		getMovie('/discover/movie').then((data) => {
			setMovie(data.results);
			console.log(data.results);
		});
	}, []);
	console.log(movie);

	return (
		<ul>
			{movie.map((movie) => (
				<MovieCard key={movie.id} />
			))}
		</ul>
	);
};

export default ContextMovieCard;
