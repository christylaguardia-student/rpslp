

// sheldon's order
export const rulesText = [
  ['', '', 'As Sheldon explains,'],
  ['scissors', 'paper', 'scissors cuts paper'],
  ['paper', 'rock', 'paper covers rock'],
  ['rock', 'lizard', 'rock crushes lizard'],
  ['lizard', 'spock', 'lizard poisons spock'],
  ['spock', 'scissors', 'spock smashes scissors'],
  ['scissors', 'lizard', 'scissors decapitates lizard'],
  ['lizard', 'paper', 'lizard eats paper'],
  ['paper', 'spock', 'paper disproves spock'],
  ['spock', 'rock', 'spock vaporizes rock'],
  ['', '', 'and as it always has...'],
  ['rock', 'scissors', 'rock crushes scissors.']
];

export const rules = {
  rock: {
    lizard: 'rock crushes lizard',
    scissors: 'rock crushes scissors'
  },
  paper: {
    rock: 'paper covers rock',
    spock: 'paper disproves spock'
  },
  scissors: {
    lizard: 'scissors decapitates lizard',
    paper: 'scissors cuts paper'
  },
  lizard: {
    spock: 'lizard poisons spock',
    paper: 'lizard eats paper'
  },
  spock: {
    scissors: 'spock smashes scissors',
    rock: 'spock vaporizes rock'
  }
};