var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let R = lines.shift();
let PI = 3.14159;

let VOLUME = ((4.0/3.0) * PI * Math.pow(R, 3)).toFixed(3);

console.log(`VOLUME = ${VOLUME}`);