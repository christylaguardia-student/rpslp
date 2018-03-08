
// sheldon's order
export const rulesText = [
  'Scissors cuts Paper',
  'Paper covers Rock',
  'Rock crushes Lizard',
  'Lizard poisons Spock',
  'Spock smashes Scissors',
  'Scissors decapitates Lizard',
  'Lizard eats Paper',
  'Paper disproves Spock',
  'Spock vaporizes Rock',
  '(and as it always has) Rock crushes Scissors'
];

export const rules = {
  rock: {
    lizard: 'Rock crushes Lizard',
    scissors: '(as it always has) Rock crushes Scissors'
  },
  paper: {
    rock: 'Paper covers Rock',
    spock: 'Paper disproves Spock'
  },
  scissors: {
    lizard: 'Scissors decapitates Lizard',
    paper: 'Scissors cuts Paper'
  },
  lizard: {
    spock: 'Lizard poisons Spock',
    paper: 'Lizard eats Paper'
  },
  spock: {
    scissors: 'Spock smashes Scissors',
    rock: 'Spock vaporizes Rock'
  }
};