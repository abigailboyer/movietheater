import React from 'react';

function MoviePreview(props) {
  return(
    <article class="movieTiles">
      <img src={props.poster} className="poster" />
    </article>
  );
}

export default MoviePreview;
