import React from 'react';
import MovieTile from './MovieTile.js';
import './NowPlaying.css';

function NowPlaying() {
  return(
    <section id="nowPlaying">
      <MovieTile />
      <MovieTile />
      <MovieTile />
    </section>
  );
}

export default NowPlaying;
