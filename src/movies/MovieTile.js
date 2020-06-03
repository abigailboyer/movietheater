import React from 'react';
import { Redirect } from 'react-router-dom';

/* maybe when you click on the poster it collects the id of that poster
   then you go to /movie/{id} or something like that but i think that
   we'd need router for that?

   I added router stuff in the nowplaying.js
*/
class MovieTile extends React.Component {

  render() {
    return(
      <article>
          <img src={this.props.poster} className="poster" alt={this.props.title} />
      </article>
    );
  }
}

export default MovieTile;
