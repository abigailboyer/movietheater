import React from 'react';
import Poster from './images/wicker-man1.jpg';

function MoviePreview() {
  const MovieDescription = "A reclusive lawman (Nicolas Cage) travels to a secluded island to search for a girl who has gone missing. Once there, he discovers sinister forces at work among the island's secretive residents, including strange sexual rituals, a harvest festival and possible human sacrifice.";
  const MovieTitle = "The Wicker Man";

  return(
    <article>
      <img src={Poster} className="poster" />
    </article>
  );
}

export default MoviePreview;
