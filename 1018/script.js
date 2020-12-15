var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());

let notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

notas.forEach(notas => {
  let quantidadeNotas = Math.trunc(valor / notas);
  console.log(`${quantidadeNotas} nota(s) de R$ ${notas + ',00'}`);
  valor -= quantidadeNotas * notas;
  console.log(valor)
});