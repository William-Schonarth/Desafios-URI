var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let line = lines.shift();
let arrayLine = line.split(' ');

let A = parseFloat(arrayLine.shift());
let B = parseFloat(arrayLine.shift());
let C = parseFloat(arrayLine.shift());
let PI = 3.14159;

let TRIANGULO = ((A * C) / 2).toFixed(3);
let CIRCULO = (PI * Math.pow(C, 2)).toFixed(3);
let TRAPEZIO = (((A + B) * C) / 2).toFixed(3);
let QUADRADO = (Math.pow(B, 2)).toFixed(3);
let RETANGULO = (A * B).toFixed(3);

console.log(`TRIANGULO: ${TRIANGULO}`);
console.log(`CIRCULO: ${CIRCULO}`);
console.log(`TRAPEZIO: ${TRAPEZIO}`);
console.log(`QUADRADO: ${QUADRADO}`);
console.log(`RETANGULO: ${RETANGULO}`);