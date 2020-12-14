var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nomeFuncionario = lines.shift();
let salarioFixo = parseInt(lines.shift());
let totalVendas = parseInt(lines.shift());
let totalComissao = (((totalVendas * 15) / 100));
let salarioComComissao = (salarioFixo + totalComissao).toFixed(2);

console.log(`TOTAL = ${salarioComComissao}`);
console.log(`TOTAL = ${totalComissao}`);