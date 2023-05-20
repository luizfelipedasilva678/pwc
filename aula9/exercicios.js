function concatenar(arr1, arr2, ...arrs) {
  let result = [];

  arrs.forEach((arr) => {
    result = [...result, ...arr];
  });

  return [...result, ...arr1, ...arr2];
}

const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 4, 5];

console.log(concatenar(a, b, [1, 2, 3], [1, 2, 3]));

function imprima([p, , t]) {
  console.log(p, t);
}

imprima([1, 2, 4]);

function clonar1(obj) {
  return { ...obj };
}

function clonar2(obj, obj2) {
  return { ...obj, ...obj2 };
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Oi"), 1000);
});

p.then((e) => console.log(e));
