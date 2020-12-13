var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = 3.14159;
let raio = lines.shift();
let area = (n * Math.pow(raio, 2)).toFixed(4);
console.log(`A=${area}`);