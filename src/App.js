import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

class App extends Component {

  state = {
    loading: true
  }

  componentDidMount = () => this.setState({ loading: false })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">rock paper scissors lizard spock</h1>
        </header>
        <main>
          {this.state.loading
            ? <p>Loading...</p>
            : <Game />
          }
        </main>
      </div>
    );
  }
}

export default App;
