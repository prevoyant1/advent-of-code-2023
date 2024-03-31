const fs = require('node:fs');
const readline = require('readline');

let result = 0

const file = readline.createInterface({
    input: fs.createReadStream('./files/input-1'),
    output: process.stdout,
    terminal: false
});

file.on('line', (line) => {
    let numbers = Array.from(line).filter((v) => v >= '0' && v <= '9')
    result += parseInt(numbers[0] + numbers[numbers.length - 1])
});

console.log(result)
