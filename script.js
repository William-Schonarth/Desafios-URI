var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let funcionario = lines.shift();
let horasTrabalhadas = lines.shift();
let valorHora = lines.shift(); 
let salario = (valorHora * horasTrabalhadas).toFixed(2);

console.log(`NUMBER = ${funcionario}`);
console.log(`SALARY = U$ ${salario}`);