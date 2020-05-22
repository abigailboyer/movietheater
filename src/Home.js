import React from 'react';
import Header from './Header';
import NowPlaying from './movies/NowPlaying';

class Home extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <NowPlaying />
            </main>
        )
    }

} export default Home
