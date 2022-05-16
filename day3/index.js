const fs = require('fs');

function getDistance(x1, y1, z1, x2, y2, z2) {
  const xDifference = x1 - x2;
  const yDifference = y1 - y2;
  const zDifference = z1 - z2;

  const result = Math.sqrt(Math.pow(xDifference, 2) + Math.pow(yDifference, 2) + Math.pow(zDifference, 2));

  return parseInt(result);
}

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

let totalDistance = 0;
for (let i = 1; i < locations.length; i = i + 1) {
  const currentMoon = locations[i];
  const previousMoon = locations[i - 1];
  const distance = getDistance(
    currentMoon[0], currentMoon[1], currentMoon[2],
    previousMoon[0], previousMoon[1], previousMoon[2]
  );
  totalDistance = totalDistance + distance;
}

console.log(totalDistance);
