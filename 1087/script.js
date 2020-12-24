var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines.forEach(coordenadas => {
  let qtdMovimentos = 0;
  let coordenada = coordenadas.split(' ');
  let x1 = coordenada.shift();
  let y1 = coordenada.shift();
  let x2 = coordenada.shift();
  let y2 = coordenada.shift();
  if (x1 === x2 && y1 === y2){
    qtdMovimentos = 0;
  } else if (((x1 === x2) || (y1 === y2) || (Math.abs(x1 - x2)) === (Math.abs(y1 - y2)))){
    qtdMovimentos = 1;
  } else {
    qtdMovimentos = 2;
  }
  console.log(qtdMovimentos)
});