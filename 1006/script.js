var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = lines.shift();
let B = lines.shift();
let C = lines.shift();

let MEDIA = (((A * 2) + (B * 3) + (C * 5)) / (2 + 3 + 5)).toFixed(1);

console.log(`MEDIA = ${MEDIA}`);