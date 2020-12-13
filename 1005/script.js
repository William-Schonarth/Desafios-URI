var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = lines.shift();
let B = lines.shift();

let MEDIA = (((A * 3.5) + (B * 7.5)) / (3.5 + 7.5)).toFixed(5);

console.log(`MEDIA = ${MEDIA}`);