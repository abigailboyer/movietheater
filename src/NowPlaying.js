import React from 'react';
import MovieTile from './MovieTile.js';
import './NowPlaying.css';
import Poster from './images/wicker-man1.jpg';

function NowPlaying() {
  return(
    <section className="MovieTileList">
      <MovieTile poster={Poster} />
      <MovieTile poster={Poster} />
      <MovieTile poster={Poster} />
    </section>
  );
}

export default NowPlaying;
