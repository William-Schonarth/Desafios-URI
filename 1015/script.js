var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let p1 = lines.shift();
let p1Array = p1.split(' ');
let p2 = lines.shift();
let p2Array = p2.split(' ');

let x1 = parseFloat(p1Array.shift()).toFixed(4);
let y1 = parseFloat(p1Array.shift()).toFixed(4);
let x2 = parseFloat(p2Array.shift()).toFixed(4);
let y2 = parseFloat(p2Array.shift()).toFixed(4);

let distancia = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
let resultado = Math.sqrt(distancia).toFixed(4);

console.log(resultado);