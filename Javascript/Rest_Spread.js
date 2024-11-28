//Rest Parameter//
function sum3(x, y, ...params) {
  console.log(x);
  console.log(y);
  console.log(params);
}
const mySum = sum3(5, 6, 8, 9, 10, "ciao", { a: "test" });

//Spread Operator//

const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];

const myArray = [...firstArray, ...secondArray]; //concatena gli elementi di due array
console.log(myArray);

const firstArray2 = [1, 2, 3, 4];
const secondArray2 = [...firstArray]; //crea una copia dell'array indipendente dalle modifiche

firstArray2.push(5);

console.log("First Array", firstArray2);
console.log("Second Array", secondArray2);

const test = {
  firstname: "Mario",
  lastname: "Rossi",
  city: "Milan",
};

const copyOfTest = {
  ...test,
  age: 18,
  city: "Roma", //si possono aggiugere o modificare proprietà dell'oggetto originario
};
console.log(copyOfTest);
