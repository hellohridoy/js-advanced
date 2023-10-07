function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

myFunc.call({ a: 4, b: 4 }, 10, 20);
myFunc.apply({ a: 14, b: 11 }, [1, 1]);
const mybind = myFunc.bind({ a: 14, b: 11 });
mybind(1, 1);
