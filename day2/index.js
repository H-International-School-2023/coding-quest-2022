const fs = require('fs');

function winningCount(winningTicket, ticket)
{
  let count = 0;
  for (let i = 0; i < ticket.length; i = i + 1)
  {
    const n = ticket[i];
    for (let j = 0; j < winningTicket.length; j = j + 1)
    {
      const wn = winningTicket[j];
      if (n === wn) {
        count = count + 1;
      }
    }
  }

  return count;
}

const fileData = fs.readFileSync('./sample_data', 'utf-8');

const rows = fileData.split('\n');
const tickets = [];
for (let i = 0; i < rows.length; i = i + 1) {
  const row = rows[i];
  const numbers = row.split(' ');
  const ticket = [];
  for (let j = 0; j < numbers.length; j = j + 1) {
    const number = numbers[j];
    const n = parseInt(number);
    ticket.push(n);
  }
  tickets.push(ticket);
}

const winningTicket = [12, 48, 30, 95, 15, 55, 97];
let winning = 0;

for (let i = 0; i < tickets.length; i = i + 1) {
  const ticket = tickets[i];
  const equalCount = winningCount(winningTicket, ticket);
  if (equalCount === 3) {
    winning = winning + 1;
  }
  if (equalCount === 4) {
    winning = winning + 10;
  }
  if (equalCount === 5) {
    winning = winning + 100;
  }
  if (equalCount === 6) {
    winning = winning + 1000;
  }
}

console.log('$' + winning);