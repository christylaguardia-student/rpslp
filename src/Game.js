import React, { PureComponent } from 'react';

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// (and as it always has) Rock crushes Scissors

const rules = {
  rock: ['lizard', 'scissors'],
  paper: ['spock', 'rock'],
  scissors: ['lizard', 'paper'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

const Icon = ({ name, active, onChange }) => (
  <label>
    <input type="radio" name="userChoice" value={name} onChange={onChange} checked={active} />
    {name}
    <i className={`far fa-hand-${name} fa-7x ${active ? 'active' : ''}`}></i>
  </label>
);

class Game extends PureComponent {

  state = {
    user: null,
    computer: null,
    winner: null,
    scores: []
  }

  handleChange = (event) => {
    const user = event.target.value;
    const keys = Object.keys(rules);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const computer = keys[randomIndex];
    let winner;

    if (user === computer) winner = 'It\'s a tie!';
    else if (user === undefined || computer === undefined) winner = 'winner unknown';
    else winner = rules[user].indexOf(computer) > -1 ? 'You won!' : 'Sorry, the computer won.';
    
    this.setState({ user, computer, winner });
  }

  reset = () => this.setState({
    user: null,
    computer: null,
    winner: null,
    scores: []
  })

  render() {
    const { user, computer, winner } = this.state;

    return (
      <div>

        {user 
          ? <p>
              <span>{`You selected ${user}`}</span>
              <i className={`far fa-hand-${user} fa-7x`}></i>
            </p>
          : <form onSubmit={this.handleSubmit}>
              {Object.keys(rules).map((name, index) =>
                <Icon key={index}
                  name={name}
                  active={user === name}
                  onChange={this.handleChange} />)}
            </form>
        }

        {computer && 
          <p>
            <span>{`Computer selected ${computer}`}</span>
            <i className={`far fa-hand-${computer} fa-7x`}></i>
          </p>
        }

        {winner &&
          <div>
            <h1>{winner}</h1>
            <button onClick={this.reset}>Rematch</button>
          </div>
        }

      </div>
    )
  }
}

export default Game;