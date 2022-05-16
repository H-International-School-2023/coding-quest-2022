const fs = require('fs');

function placeMove(move, player, c1, c2, c3, c4, c5, c6, c7) {
  let currentColumn = null;
  if (move === 1) {
    currentColumn = c1;
  }
  else if (move === 2) {
    currentColumn = c2;
  }
  else if (move === 3) {
    currentColumn = c3;
  }
  else if (move === 4) {
    currentColumn = c4;
  }
  else if (move === 5) {
    currentColumn = c5;
  }
  else if (move === 6) {
    currentColumn = c6;
  }
  else {
    currentColumn = c7;
  }

  let i = 0;
  while (currentColumn[i] !== 0) {
    i = i + 1;
  }

  currentColumn[i] = player;
}

function checkWinnerByRows(c1, c2, c3, c4, c5, c6, c7) {

  let result = -1;
  for (let i = 0; i < 7 && result === -1; i = i + 1) {
    if (
      (c1[i] === c2[i] && c2[i] === c3[i] && c3[i] === c4[i])
      || (c2[i] === c3[i] && c3[i] === c4[i] && c4[i] === c5[i])
      || (c3[i] === c4[i] && c4[i] === c5[i] && c5[i] === c6[i])
      || (c4[i] === c5[i] && c5[i] === c6[i] && c6[i] === c7[i])
    ) {
      result = c1[i];
    }
  }

  return result;
}

function checkWinner(c1, c2, c3, c4, c5, c6, c7) {

  checkWinnerByRows();
}

const fileData = fs.readFileSync('./sample_data', 'utf-8');

const rows = fileData.split('\n');

const games = [];
for (let i = 0; i < rows.length; i = i + 1) { // loop all the games
  const row = rows[i];
  const characters = row.split(''); // split a game to an array of charaters
  const game = [];
  for (let j = 0; j < characters.length; j = j + 1) { // loop all charaters
    const character = characters[j];
    const n = parseInt(character);
    game.push(n);
  }
  games.push(game);
}

let p1Wins = 0;
let p2Wins = 0;
let p3Wins = 0;

for (let i = 0; i < games.length; i = i + 1) { // loop all the games
  const game = games[i];

  const c1 = [0, 0, 0, 0, 0, 0, 0];
  const c2 = [0, 0, 0, 0, 0, 0, 0];
  const c3 = [0, 0, 0, 0, 0, 0, 0];
  const c4 = [0, 0, 0, 0, 0, 0, 0];
  const c5 = [0, 0, 0, 0, 0, 0, 0];
  const c6 = [0, 0, 0, 0, 0, 0, 0];
  const c7 = [0, 0, 0, 0, 0, 0, 0];

  let gameResult = -1;
  for (let j = 0; j < game.length && gameResult === -1; j = j + 1) { // loop all the moves in this game
    const move = game[j];
    const player = (j % 3) + 1;
    placeMove(move, player, c1, c2, c3, c4, c5, c6, c7);
    gameResult = checkWinner(c1, c2, c3, c4, c5, c6, c7);
  }

  if (gameResult === 1) {
    p1Wins = p1Wins + 1;
  }
  else if (gameResult === 2) {
    p2Wins = p2Wins + 1;
  }
  else if (gameResult === 3) {
    p3Wins = p3Wins + 1;
  }
}