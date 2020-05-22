import React from 'react';
import Nav from './Nav';

function Header() {
  return(
    <header>
      <section className="grid">
        <Nav />
        <h1>The Cage</h1>
      </section>
    </header>
  );
}

export default Header;
