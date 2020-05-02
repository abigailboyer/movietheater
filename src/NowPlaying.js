import React from 'react';
import MovieTile from './MovieTile.js';
import './NowPlaying.css';
import movieData from "./movieData";

function NowPlaying() {
  const movies = movieData.map(movie => {
    return(
      <MovieTile poster={movie.poster} />
    )
  });
  return(
    <section className="MovieTileList">
      {movies}
    </section>
  );
}

export default NowPlaying;
