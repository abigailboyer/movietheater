import React from 'react'
import {useParams} from 'react-router-dom'
import featuredData from '../data/featuredData'

function MovieDetails(props) {
  const {movieId} = useParams();
  console.log(movieId);
  console.log(typeof(movieId));

  const thisMovie = featuredData.find(movie => movie._id == movieId)

  return (
    <section>
      <h1>{thisMovie.title}</h1>
      <p>{thisMovie.description}</p>
    </section>
  )
}

export default MovieDetails
