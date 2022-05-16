const fs = require('fs');
const fileContent = fs.readFileSync('./data', 'utf-8');

const rows = fileContent.split('\n');
const tickets = rows.map((row) => {
  return row.split(' ').map((k) => parseInt(k));
})

const winning = [12, 48, 30, 95, 15, 55, 97];
let price = 0;

for (let i = 0; i < tickets.length; i = i + 1) {
  const ticket = tickets[i];
  let count = 0;
  for (let j = 0; j < winning.length; j = j + 1) {
    for (let k = 0; k < ticket.length; k = k + 1) {
      if (winning[j] === ticket[k]) {
        count = count + 1;
      }
    }
  }
  if (count === 3) {
    price = price + 1;
  }
  if (count === 4) {
    price = price + 10;
  }
  if (count === 5) {
    price = price + 100;
  }
  if (count === 6) {
    price = price + 100;
  }
}

console.log(price);