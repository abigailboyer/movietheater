import React from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import featuredData from '../data/featuredData'
import movieData from '../data/movieData'
import Showtimes from '../checkout/Showtimes'

function MovieDetails(props) {
  const {movieId} = useParams();
  console.log(props);
  console.log(movieId);
  //console.log(typeof(movieId));
  var type = props.type;

  if(type === "new") {
    var thisMovie = movieData.find(movie => movie._id = movieId)
  } else if (type === "featured") {
      thisMovie = featuredData.find(movie => movie._id = movieId)
  }

  return (
    <main id="movieDetailsPage">
      <section id="movieDescription">
        <h2>{thisMovie.title}</h2>
        <h4>Rotten Tomatoes: 10%</h4>
        <p>{thisMovie.description}</p>
      </section>

      <section id="showtimes">
        {/* make a date and time selection, pass that selection on to the next page
            when you click the continue button */}
        <Showtimes />
        <Link to="/checkout">
          <button className="form continue">Continue</button>
        </Link>
      </section>
    </main>
  )
}

export default MovieDetails
