var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nomeFuncionario = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let totalVendas = parseFloat(lines.shift());
let totalComissao = (((totalVendas * 15) / 100));
let salarioComComissao = (salarioFixo + totalComissao).toFixed(2);

console.log(`TOTAL = R$ ${salarioComComissao}`);