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

//javaScript a abstraction hoy callback/higher order fuction er maddhome

hello("hossain", function (name) {
  console.log("how are you " + name);
});

const me = {
  name: "Hridoy Hossain",
  age: 12,
  email: "ridoy.java@gmail.com",
};

function printMyself(person, callback) {
  console.log("person: " + person.name);
  if (person.age >= 18) {
    callback(person.email);
  } else console.log("Your are to small");
}

printMyself(me, function (email) {
  console.log("Email sent to " + email);
});

function print(data, callback1, callback2) {
  callback1(data);
  callback2(data);
}

print(
  "I am Hridoy Hossain",
  function (data) {
    let data1 = data.toUpperCase();
    console.log("Uppercase :" + data1);
  },
  function (data) {
    let data1 = data.toLowerCase();
    console.log("LowerCase: " + data1);
  }
);
