import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { firebaseDatabase } from "../../firebase/firebase";
import { hideLoading, showLoading } from "../loading/loadingSlice";

const leafRoot = "movies";

const movieRef = (movieType) =>
  firebaseDatabase.ref(`${leafRoot}/${movieType}`);

const Row = ({ title, movieType, onMovieSelected }) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  const fetchMovies = useCallback(
    (movieType) => {
      dispatch(showLoading());
      movieRef(movieType).on("value", (snapshot) => {
        const movies = snapshot.val();

        if (movies && movies.length !== 0) {
          setMovies(() => movies);
          dispatch(hideLoading());
        }
      });
    },
    [dispatch]
  );

  useEffect(() => {
    fetchMovies(movieType);
  }, [movieType, fetchMovies]);

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
