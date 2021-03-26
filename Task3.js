const user1 = {
  name: "John",
  years: 30,
};

let { name } = user1;
let { years: age } = user1;
let { isAdmin = false } = user1;
console.log(name, age, isAdmin);
alert(`${name}, ${age}, ${isAdmin}`);
