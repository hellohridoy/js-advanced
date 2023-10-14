const arr = [4, 3, 5, 6, 7, 9, 0];

const newArray = arr.filter(function (value) {
  return value % 2 == 1;
});
console.log(newArray);
//Implementation of Filter Fuction
function myFilter(arr, callback) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      array.push(arr[i]);
    }
  }
  return array;
}

let data = myFilter(arr, function (elements) {
  return elements % 2 == 0;
});
console.log(data);
