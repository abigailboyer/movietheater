import React from 'react'
import {useParams} from 'react-router-dom'
import featuredData from '../data/featuredData'

function MovieDetails(props) {
  const {movieId} = useParams();
  console.log(movieId);
  console.log(typeof(movieId));

  const thisMovie = featuredData.find(movie => movie._id == movieId)

  return (
    <main id="movieDetailsPage">
      <section id="movieDescription">
        <h2>{thisMovie.title}</h2>
        <h4>Rotten Tomatoes: 10%</h4>
        <p>{thisMovie.description}</p>
      </section>

      <section id="showtimes">
        {/* ticket purchasing starts here */}
      </section>
    </main>
  )
}

export default MovieDetails
