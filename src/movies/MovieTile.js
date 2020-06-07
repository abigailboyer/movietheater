import React from 'react';
import { Redirect } from 'react-router-dom';

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
