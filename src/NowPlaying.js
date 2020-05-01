import React from 'react';
import MovieTile from './MovieTile.js';

function NowPlaying() {
  return(
    <section id="nowPlaying">
      <MovieTile />
      <MovieTile />
    </section>
  );
}

export default NowPlaying;
