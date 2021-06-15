import React, { useEffect, useState } from "react";

import { firebaseDatabase } from "../firebase/firebase";

const leafRoot = "movies";

const movieRef = (movieType) =>
  firebaseDatabase.ref(`${leafRoot}/${movieType}`);

const Row = ({ title, movieType, onMovieSelected }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(movieType);
  }, [movieType]);

  const fetchMovies = (movieType) => {
    movieRef(movieType).on("value", (snapshot) => {
      const movies = snapshot.val();

      if (movies && movies.length !== 0) {
        setMovies(() => movies);
      }
    });
  };

  const moviePoster = (movie) => (
    <img
      onClick={() => onMovieSelected(movie)}
      className="row__poster row__posterLarge"
      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      alt={movie.original_name}
    />
  );

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">{movies.map(moviePoster)}</div>
    </div>
  );
};

export default Row;
