var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line = lines.shift();
let arrayLine = line.split(' ');

let A = parseFloat(arrayLine.shift());
let B = parseFloat(arrayLine.shift());
let C = parseFloat(arrayLine.shift());

let maiorAb = ((A + B + Math.abs(A - B)) / 2);
let maior = ((maiorAb + C + Math.abs(maiorAb - C)) / 2);

console.log(`${maior} eh o maior`);