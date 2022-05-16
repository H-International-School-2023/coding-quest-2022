const fs = require('fs');

const fileContent = fs.readFileSync('./data', 'utf-8');

const data = fileContent.split('\n').map((row) => parseInt(row));

const window = 60;
let count = 0;
for (let i = window - 1; i < data.length; i = i + 1) {
  let sum = 0;
  for (let j = i - (window - 1); j < i + 1; j = j + 1) {
    sum = sum + data[j];
  }
  const avg = sum / window;
  if (avg < 1500 || avg > 1600) {
    count = count + 1;
  }
}

console.log(count);