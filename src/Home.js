import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NowPlaying from './movies/NowPlaying';

class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <NowPlaying />
        <Footer />
      </main>
    )
  }
}

export default Home
