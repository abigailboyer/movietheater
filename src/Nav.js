import React from 'react';
import NavElement from './NavElement';

//images
import homeImage from './images/home-inactive.png';
import browseImage from './images/search-inactive.png';
import ticketsImage from './images/ticket-inactive.png';
import profileImage from './images/profile-inactive.png';
import homeActive from './images/home-active.png';
import browseActive from './images/search-active.png';
import ticketsActive from './images/ticket-active.png';
import profileActive from './images/profile-active.png';

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <nav>
          <ul className='nav-list'>
            <NavElement
              imgUrl= {homeImage}
              imgName='home'
              imgAlt="home icon"
              activeUrl={homeActive}
              linkDest="/"
            />
            <NavElement 
              imgUrl={browseImage}
              imgName='browse'
              imgAlt="browse icon"
              activeUrl={browseActive}
              linkDest="/browse"
            />
            <NavElement
              imgUrl={ticketsImage}
              imgName='tickets'
              imgAlt="tickets icon"
              activeUrl={ticketsActive}
              linkDest="/tickets"
            />
            <NavElement
              imgUrl={profileImage}
              imgName='profile'
              imgAlt="profile icon"
              activeUrl={profileActive}
              linkDest="/profile"
            />
        </ul>
      </nav>
    );
  } 
}

export default Nav;
