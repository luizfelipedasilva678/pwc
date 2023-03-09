(function (x, y) {
  console.log(`Resultado ${x} elevado a ${y} = `, Math.pow(x, y));
})(2, 3);

function sum() {
  let sum = 0;

  const argumentos = Array.from(arguments);

  argumentos.forEach((argumento) => {
    sum += argumento;
  });

  return sum;
}

function sum2() {
  var sum = 0;

  var argumentos = Array.from(arguments);

  for (var i in argumentos) {
    sum += argumentos[i];
  }

  return sum;
}

function sum3() {
  var sum = 0;

  var argumentos = Array.from(arguments);

  for (var valor of argumentos) {
    sum += valor;
  }

  return sum;
}

console.log("Resultado funcao sem argumentos: ", sum(2, 3, 4));
console.log("Resultado funcao2 sem argumentos: ", sum2(10, 20, 30));
console.log("Resultado funcao3 sem argumentos: ", sum3(10, 20, 30));
