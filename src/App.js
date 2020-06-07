import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Browse from './Browse.js';
import Tickets from './Tickets.js';
import Profile from './Profile.js';
import Footer from './Footer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MoviePreview from './movies/MoviePreview';
import MovieDetails from './movies/MovieDetails';

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <main>
        <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/browse' component={Browse} />
              <Route path='/tickets' component={Tickets} />
              <Route path='/profile' component={Profile} />
              <Route path='/movies/featured/:movieId'>
                <MovieDetails type="featured" />
              </Route>
              <Route path='/movies/new/:movieId'>
                <MovieDetails type="new" />
              </Route>
              <Route path='/movies/new' component={MoviePreview} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
