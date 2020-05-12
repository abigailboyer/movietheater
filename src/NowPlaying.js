import React from 'react';
import MovieTile from './MovieTile.js';
import './NowPlaying.css';
import movieData from "./movieData";

class NowPlaying extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData
    }
  }

  render() {
    const movieComponents = this.state.movies.map(movie => {
      return(
        <MovieTile poster={movie.poster} key={movie.id} />
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
}

export default NowPlaying;
