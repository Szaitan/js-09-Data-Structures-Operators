'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Part 1
const [players1, players2] = game.players;

// Part 2
const [gk, ...fieldPlayers] = game.players[0];

console.log(gk);
console.log(fieldPlayers);

// Part 3
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// Part 4
const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Part 5
const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(team1, draw, team2);

// Part 6
function printGoals(...names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Player that score the goal: ${names[i]}.`);
  }
  console.log(`Total number of Goals: ${names.length}`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log('.................');
printGoals(...game.scored);

// Part 7
team1 < team2 && console.log('Team 1 will win!');
team1 > team2 && console.log('Team 2 will win!');

console.log('------------------ Part 2 -------------------');
// Part 8
for (let [i, scorer] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scorer}`);
}

// Part 9
let total = 0;
for (let val of Object.values(game.odds)) {
  total += val;
}
let avgTotal = total / Object.keys(game).length;
console.log(avgTotal);

// Part 10
for (let [key, val] of Object.entries(game.odds)) {
  game[key] && console.log(`Odd of victory ${game[key]}: ${val}`);
  game?.[key] || console.log(`Odd of draw: ${val}`);
}

// Part 11
const scores = {};
for (let val of game.scored) {
  scores[val] && (scores[val] += 1);
  scores[val] || (scores[val] = 1);
}
console.log(scores);

console.log('----------------- Part 3 ----------------');
// Challenge 3
// Part 12

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = new Set([...gameEvents.values()]);
console.log(events);

// Part 13
gameEvents.delete(64);
console.log(gameEvents);

// Part 14
console.log(
  `An event happened, on  average, every ${90 / gameEvents.size} minutes`
);
const gameTime = [...gameEvents][gameEvents.size - 1][0];
console.log(
  `An event happened, on  average, every ${gameTime / gameEvents.size} minutes`
);

// Part 15
for (let [key, val] of gameEvents) {
  key <= 45
    ? console.log(`[FIRST HALF]${key}: ${val}`)
    : console.log(`[SECOND HALF]${key}: ${val}`);
}

console.log('----------------- Part 3 ----------------');
// Challenge 3
// Part 16

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', textConvert);
document.querySelector('button').textContent = 'Click';

function textConvert() {
  const textData = document.querySelector('textarea').value.split('\n');
  for (let [n, data] of textData.entries()) {
    console.log(data.trim().padEnd(20, ' ') + '✅'.repeat(n + 1));
  }
}
