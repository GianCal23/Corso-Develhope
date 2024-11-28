//Le funzioni: dichiarazione e invocazione//
function somma(a, b) {
  return a + b;
}
let result = somma(2, 2);
console.log(result);

//Function Expressions//
let sumFn = function (a, b) {
  return a + b;
};
let sumResult = sumFn(2, 3);
console.log(sumResult);

//Le callback//
function sum(a, b, callback) {
  callback(a + b);
}

sum(3, 2, function (result) {
  console.log("The result is: " + result);
});

//Le arrow function//
let arrow = (a, b) => a + b;

console.log(arrow(3, 2));

setTimeout(() => console.log("Hi!"), 2500);
