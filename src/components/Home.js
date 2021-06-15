import React, { useState } from "react";

import Nav from "./Nav";
import Header from "./Header";
import Row from "./Row";
import Detail from "./Detail";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState();

  const selectMovie = (movie) => {
    setSelectedMovie(() => movie);
  };

  const closeDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="app">
        <Nav />
        <Header />
        <Row
          title="Netflix Originals"
          movieType="netflix-originals"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Trending Now"
          movieType="trending-now"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Top Rated"
          movieType="top-rated"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Action Movies"
          movieType="action-movies"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Horror Movies"
          movieType="horror-movies"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Romance Movies"
          movieType="romance-movies"
          onMovieSelected={selectMovie}
        />
        <Row
          title="Documentaries Movies"
          movieType="documentaries-movies"
          onMovieSelected={selectMovie}
        />
      </div>
      {selectedMovie && (
        <Detail movie={selectedMovie} onBackClicked={closeDetail} />
      )}
    </>
  );
};

export default Home;
