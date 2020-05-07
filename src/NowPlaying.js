import React from 'react';
import MovieTile from './MovieTile.js';
import './NowPlaying.css';
import movieData from "./movieData";

function NowPlaying() {
  const movieComponents = movieData.map(movie => {
    return(
      <MovieTile poster={movie.poster} />
    )
  });
  return(
    <section className="MovieTileList">
      <ul>
        <li>{movieComponents}</li>
      </ul>
    </section>
  );
}

export default NowPlaying;
