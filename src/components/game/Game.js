import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { rules } from './Rules';
import Play from './Play';
import Scores from './Scores';
import Results from './Results';

class Game extends PureComponent {

  state = {
    results: null,
    scores: []
  }

  handleClick = (user) => {
    const keys = Object.keys(rules);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const computer = keys[randomIndex];

    if (user === computer) this.handleTie(user, computer);
    else this.determineWinner(user, computer);
  }

  determineWinner = (user, computer) => {
    const userWon = rules[user].hasOwnProperty(computer);

    this.setState({
      results: userWon ? rules[user][computer] : rules[computer][user],
      scores: [
        ...this.state.scores,
        {
          user: user,
          computer: computer,
          winner: userWon ? 'user' : 'computer'
        }
      ]
    });
  }

  handleTie = (user, computer) => this.setState({
    results: 'No winner.',
    scores: [
      ...this.state.scores,
      {
        user: user,
        computer: computer,
        winner: 'tie'
      }
    ]
  })

  rematch = () => this.setState({ results: null })

  reset = () => this.setState({ results: null, scores: [] })

  render() {
    const { results, scores } = this.state;

    return (
      <main>
        <div className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">{scores.length > 0 ? 'Your Turn!' : 'Play now!'}</p>
            </div>
          </div>
        </div>

        <section className="section">
          <Play handleClick={this.handleClick} />
        </section>

        <section className="section">
          {scores.length > 0 &&
            <Scores scores={scores} reset={this.reset} />}
        </section>

        {results &&
          <Results
            score={scores[scores.length - 1]}
            results={results}
            handleClose={this.rematch} />}
      </main>
    )
  }
}

PropTypes.Game = {
  results: PropTypes.string,
  scores: PropTypes.array
}

export default Game;