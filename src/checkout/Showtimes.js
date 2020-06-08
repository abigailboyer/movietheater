import React from 'react'
import {Link} from 'react-router-dom'
import movieData from '../data/movieData'

class Showtimes extends React.Component {
  constructor() {
    super();
    this.state = {
      newMovies: movieData
    }
  }

  render() {
      /*const showtimes = this.state.newMovies.showtimes.map(showtime => {
        console.log(showtime);
      });*/
      
    return (
      <ol id="showtimes">
        h
      </ol>
    )
  }
}

export default Showtimes
