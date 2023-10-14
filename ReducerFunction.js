const array = [, 3, 2, 4, 5, 3, 45, 6, 7];

let res = array.reduce(function (a, b) {
  return a + b;
});
console.log(res);
