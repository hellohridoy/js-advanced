const arr = [4, 3, 5, 6, 7, 9, 0];

const newArray = arr.filter(function (value) {
  return value % 2 == 1;
});
console.log(newArray);
