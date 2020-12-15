var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let horas = lines.shift();
let velocidadeMedia = lines.shift();

let litros = ((horas * velocidadeMedia) / 12).toFixed(3);

console.log(litros);