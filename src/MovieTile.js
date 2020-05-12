import React from 'react';

function MoviePreview(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log("I was clicked");
  }

  return(
    <article className="movieTiles">
      <a href="#" onClick={handleClick}><img src={props.poster} className="poster" /></a>
    </article>
  );
}

export default MoviePreview;
