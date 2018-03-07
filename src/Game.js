import React, { PureComponent } from 'react';

const rules = {
  rock: {
    lizard: 'Rock crushes Lizard',
    scissors: '(as it always has) Rock crushes Scissors'
  },
  paper: {
    rock: 'Paper covers Rock',
    spock: 'Paper disproves Spock'
  },
  scissors: {
    paper: 'Scissors cuts Paper',
    lizard: 'Scissors decapitates Lizard'
  },
  lizard: {
    spock: 'Lizard poisons Spock',
    paper: 'Lizard eats Paper'
  },
  spock: {
    scissors: 'Spock smashes Scissors',
    rock: 'Spock vaporizes Rock'
  },
};

const Icon = ({ name, active, onChange }) => (
  <label>
    <input type="radio" name="userChoice" value={name} onChange={onChange} checked={active} />
    <i className={`far fa-hand-${name} fa-7x ${active ? 'active' : ''}`}></i>
    <span className="labelText">{name}</span>
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
    else if (user === undefined || computer === undefined) winner = 'winner unknown'; // just in case
    else {
      const userWon = rules[user].hasOwnProperty(computer);
      winner = userWon ? `${rules[user][computer]}, you win!` : `${rules[computer][user]}, the computer won.`;
    }
    
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