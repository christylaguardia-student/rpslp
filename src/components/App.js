import React, { Component } from 'react';
import Header from './Header';
import Game from './game/Game';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div id="root">
        <Header />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;