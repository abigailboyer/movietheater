import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import NowPlaying from './NowPlaying.js';

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }


  render() {
    return (
      <main>
        <Header />
        <NowPlaying />
      </main>
    );
  }
}

export default App;
