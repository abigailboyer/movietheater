import React from 'react';

/* maybe when you click on the poster it collects the id of that poster
   then you go to /movie/{id} or something like that but i think that
   we'd need router for that?
*/
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
