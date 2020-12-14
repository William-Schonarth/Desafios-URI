var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let item1 = lines.shift();
let item2 = lines.shift();
let arrayItem1 = item1.split(' ');
let arrayItem2 = item2.split(' ');

let codPro1 = arrayItem1.shift();
let qtdPro1 = arrayItem1.shift();
let vlrPro1 = arrayItem1.shift();

let codPro2 = arrayItem2.shift();
let qtdPro2 = arrayItem2.shift();
let vlrPro2 = arrayItem2.shift();

let totalValor = ((vlrPro1 * qtdPro1) + (vlrPro2 * qtdPro2)).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${totalValor}`);

// var linha1 = arrayLines.shift();
// var linha2 = arrayLines.shift();
// var arrayLinha1 = linha1.split(' ');
// var arrayLinha2 = linha2.split(' ');

// var cod1 = arrayLinha1.shift();
// var und1 = parseInt(arrayLinha1.shift());
// var val1 = parseFloat(arrayLinha1.shift());

// var cod2 = arrayLinha2.shift();
// var und2 = parseInt(arrayLinha2.shift());
// var val2 = parseFloat(arrayLinha2.shift());

// var valorTotal = (und1 * val1) + (und2 * val2);

// console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);