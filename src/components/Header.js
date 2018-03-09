import React from 'react';
import About from './About';

const Header = () => (
  <header>
    <div className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">
          Rock Paper Scissors Lizard Spock
          </p>
          <About />
        </div>
      </div>
    </div>
  </header>
);

export default Header;