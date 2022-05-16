const fs = require('fs');

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
