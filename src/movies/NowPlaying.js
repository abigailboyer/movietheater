import React from 'react';
import MovieTile from './MovieTile.js';
import MoviePreview from './MoviePreview.js';
import './NowPlaying.css';
import movieData from "../data/movieData";
import featuredData from '../data/featuredData';
import {Link} from 'react-router-dom';

class NowPlaying extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      newMovies: movieData,
      featuredMovies: featuredData
    }
  }

  handleClick(data) {
    /**
     * I'm trying to figure out how to pass the data from the click to props for the router in App.js but im
     * dumb
     */
    let movieInfo = []
    movieInfo.push(data);
    console.log(movieInfo);
    let movieTitle = movieInfo[0].title
    let movieId = movieInfo[0].id
    console.log(movieTitle, movieId)
  }

  render() {
    const newMovies = this.state.newMovies.map(movie => {
      return(
        <li className="movieTiles" key={movie.id} onClick={this.handleClick.bind(this, movie)}>
          <Link to="/movies/new">
            <MovieTile poster={movie.poster} title={movie.title} />
          </Link>
        </li>
      )
    });

    const featuredMovies = this.state.featuredMovies.map(featured => {
      return(
        <li className="movieTiles" key={featured.id} id={featured.title} onClick={this.handleClick.bind(this, featured)}>
          <Link to="/movies/featured">
            <MovieTile poster={featured.poster} title={featured.title} />
          </Link>
        </li>
      )
    });

    return(
      <div>
        <section className="featured-movie">
          <h1 className="featured-movie-title">Pay the Ghost</h1>
        </section>
        <section className="movie-tile-section">
          <h3>Featured</h3>
          <ul className="MovieTileList">
            {featuredMovies}
          </ul>
        </section>
        <section className="movie-tile-section">
          <h3>New</h3>
          <ul className="MovieTileList">
            {newMovies}
          </ul>
        </section>
      </div>
    );
  }
}

export default NowPlaying;
