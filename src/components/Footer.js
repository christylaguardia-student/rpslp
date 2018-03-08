import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <a href="http://www.laguardia.io/" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fas fa-paper-plane"></i>
            </span>
            <span> Christy La Guardia</span>
          </a>
        </p>
        <p>
          <a href="https://github.com/christylaguardia/rock-paper-scissors-lizard-spock" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-github-alt"></i>
            </span>
            <span> Source Code</span>
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;