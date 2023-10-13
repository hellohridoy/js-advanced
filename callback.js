// function hello(name) {
//   print(name);
//   print("somethings else");
// }
// function print(args) {
//   console.log(args);
// }
// hello("Hridoy Hossain");

function hello(name, print) {
  print(name);
}
hello("hridoy", function (name) {
  console.log("Hello " + name);
});

hello("hossain", function (name) {
  console.log("how are you " + name);
});
