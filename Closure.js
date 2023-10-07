function getCapitals(capital) {
  return function (interest) {
    return (capital * interest) / 100;
  };
}
const business = getCapitals(10000);

const profit = business(25);
console.log("====================================");
console.log(profit);
console.log("====================================");
