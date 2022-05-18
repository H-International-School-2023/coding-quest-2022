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
    if (c1[i] !== 0 && c1[i] === c2[i] && c2[i] === c3[i] && c3[i] === c4[i]) {
      result = c1[i];
    }

    if (c2[i] !== 0 && c2[i] === c3[i] && c3[i] === c4[i] && c4[i] === c5[i]) {
      result = c2[i];
    }

    if (c3[i] !== 0 && c3[i] === c4[i] && c4[i] === c5[i] && c5[i] === c6[i]) {
      result = c3[i];
    }

    if (c4[i] !== 0 && c4[i] === c5[i] && c5[i] === c6[i] && c6[i] === c7[i]) {
      result = c4[i];
    }
  }

  return result;
}

function checkWinnerByColumns(c1, c2, c3, c4, c5, c6, c7) {

  let result = -1;
  for (let i = 0; i < 4 && result !== -1; i = i + 1 ) {
    if (
      c1[i] !== 0 && c1[i] === c1[i + 1] && c1[i + 1] === c1[i + 2] && c1[i + 2] === c1[i + 3] && c1[i + 3] === c1[i + 4]
    ) {
      result = c1[i];
    }
    if (
      c2[i] !== 0 && c2[i] === c2[i + 1] && c2[i + 1] === c2[i + 2] && c2[i + 2] === c2[i + 3] && c2[i + 3] === c2[i + 4]
    ) {
      result = c2[i];
    }
    if (
      c3[i] !== 0 && c3[i] === c3[i + 1] && c3[i + 1] === c3[i + 2] && c3[i + 2] === c3[i + 3] && c3[i + 3] === c3[i + 4]
    ) {
      result = c3[i];
    }
    if (
      c4[i] !== 0 && c4[i] === c4[i + 1] && c4[i + 1] === c4[i + 2] && c4[i + 2] === c4[i + 3] && c4[i + 3] === c4[i + 4]
    ) {
      result = c4[i];
    }
    if (
      c5[i] !== 0 && c5[i] === c5[i + 1] && c5[i + 1] === c5[i + 2] && c5[i + 2] === c5[i + 3] && c5[i + 3] === c5[i + 4]
    ) {
      result = c5[i];
    }
    if (
      c6[i] !== 0 && c6[i] === c6[i + 1] && c6[i + 1] === c6[i + 2] && c6[i + 2] === c6[i + 3] && c6[i + 3] === c6[i + 4]
    ) {
      result = c6[i];
    }
    if (
      c7[i] !== 0 && c7[i] === c7[i + 1] && c7[i + 1] === c7[i + 2] && c7[i + 2] === c7[i + 3] && c7[i + 3] === c7[i + 4]
    ) {
      result = c7[i];
    }
  }

  return result;
}

function checkWinnerByDiagonals(c1, c2, c3, c4, c5, c6, c7) {
  const c = [c1, c2, c3, c4, c5, c6, c7];

  let result = -1;
  for (let i = 0; i < 4 && result === -1; i = i + 1) {
    const currentColumn = c[i];
    const currentColumn1 = c[i + 1];
    const currentColumn2 = c[i + 2];
    const currentColumn3 = c[i + 3];

    for (let j = 0; j < 4 && result === -1; j = j + 1) {
      if (
        currentColumn[j] !== 0 && currentColumn[j] === currentColumn1[j + 1] && currentColumn1[j + 1] === currentColumn2[j + 2] && currentColumn2[j + 2] === currentColumn3[j + 3]
      ) {
        result = currentColumn[j];
      }
    }
  }

  return result;
}

function checkWinner(c1, c2, c3, c4, c5, c6, c7) {

  let winner = checkWinnerByRows(c1, c2, c3, c4, c5, c6, c7);

  if (winner === -1) {
    winner = checkWinnerByColumns(c1, c2, c3, c4, c5, c6, c7);
  }
  if (winner === -1) {
    winner = checkWinnerByDiagonals(c1, c2, c3, c4, c5, c6, c7);
  }

  return winner;
}

const fileData = fs.readFileSync('./data', 'utf-8');

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

console.log(p1Wins, p2Wins, p3Wins);
console.log(p1Wins * p2Wins * p3Wins);