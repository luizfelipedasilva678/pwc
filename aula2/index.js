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

console.log("Resultado funcao sem argumentos: ", sum(2, 3, 4));
