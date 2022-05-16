const fs = require('fs');

const fileData = fs.readFileSync('./data', 'utf-8');

const rows = fileData.split('\n');
const locations = [];
for (let i = 0; i < rows.length; i = i + 1) {
  const row = rows[i];
  const numbers = row.split(' ');
  const coordinate = [];
  for (let j = 0; j < numbers.length; j = j + 1) {
    const number = numbers[j];
    const n = parseInt(number);
    coordinate.push(n);
  }
  locations.push(coordinate);
}