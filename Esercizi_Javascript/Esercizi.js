// function somma(num1, num2) {
//   return num1 + num2;
// }
// console.log(somma(5, 3));

// function sottrai(num1, num2) {
//   return num1 - num2;
// }
// console.log(sottrai(10, 4));

// function moltiplica(num1, num2) {
//   return num1 * num2;
// }
// console.log(moltiplica(4, 7));

// function dividi(num1, num2) {
//   return num1 / num2;
// }
// console.log(dividi(20, 4));

// function concatena(str1, str2) {
//   return str1 + str2;
// }
// console.log(concatena("Hello ", "World"));

// function lunghezzaStringa(str) {
//   return str.length;
// }
// console.log(lunghezzaStringa("Javascript"));

// let somma = (num1, num2) => num1 + num2;
// console.log(somma(5, 3));

// let sum = (a, b) => a + b;
// console.log(sum(4, 6));

// let quadrato = (sqr) => sqr * 5;
// console.log(quadrato(5));

// let saluto = () => "Hello World";
// console.log(saluto());

// let maggioreDiDieci = (num) => {
//   if (num > 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(maggioreDiDieci(15));
// console.log(maggioreDiDieci(8));

// const numeri = [1, 2, 3, 4, 5];
// const numeriDoppi = numeri.map((num) => num * 2);
// console.log(numeriDoppi);

// const numbers = [3, 6, 8, 2, 7, 5];
// const numeriPari = numbers.filter((num) => num % 2 === 0);
// console.log(numeriPari);

// const numbers2 = [1, 2, 3, 4, 5];
// const Sum = numbers2.reduce((a, num) => a + num, 0);
// console.log(Sum);

const persona = {
  nome: "Luigi",
  cognome: "Rossi",
  eta: 22,
  saluta: function () {
    return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta} anni`;
  },
};
persona.mail = "luigi.rossi@xx.com";
persona.eta += 1;
console.log(persona.saluta());

const azienda = {
  nome: "TechCorp",
  annoFondazione: 2005,
  dipendenti: [
    { nome: "Anna", ruolo: "Sviluppatore" },
    { nome: "Luca", ruolo: "Designer" },
    { nome: "Giulia", ruolo: "Manager" },
  ],
  numDipendeti: function () {
    return this.dipendenti;
  },
};
console.log(azienda.numDipendeti());

const numbers = [1, 2, 3, 4, 5];
let quadrato = numbers.map((num) => num * num);
console.log(quadrato);

const words = ["apple", "banana", "cherry", "date"];
let lengths = words.map((word) => word.length);
console.log(lengths);

const numbers5 = [5, 10, 15, 20];
let incremento = numbers5.map((num) => num + 10);
console.log(incremento);

const numeri = [1, 2, 3, 4, 5];
const dubledNum = numeri.map((num) => num * 2);
console.log("Numeri Doppi", dubledNum);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeriPari = numbers2.filter((num) => num % 2 == 0);
console.log(numeriPari);

const words2 = ["apple", "banana", "cherry", "blueberry", "avocado"];
let letteraB = words2.filter((bWord) => bWord.startsWith("b"));
console.log(letteraB);

const numbers6 = [45, 60, 32, 78, 90, 15, 22];
let over50 = numbers6.filter((num) => num > 50);
console.log(over50);

const numbers3 = [10, 20, 30, 40, 50];
let sum = numbers3.reduce((a, num) => a + num, 0);
console.log(sum);

const words3 = ["Hello", "world", "from", "JavaScript"];
let stringSum = words3.reduce((a, word) => a + " " + word);
console.log(stringSum);

const numbers7 = [1, 2, 3, 4, 5];
let product = numbers7.reduce((a, value) => a * value, 1);
console.log("product", product);

const arr = [1, 2, 3, 4, 5];
const arrNumber = arr.reduce((a, num) => a + num, 0);
console.log("somma Array", arrNumber);

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
  console.log(fruit);
});

const numbers8 = [10, 20, 30, 40];
let sum2 = 0;
numbers8.forEach((num2) => {
  sum2 += num2;
});
console.log("Somma forEach", sum2);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
people.forEach((pep) => {
  console.log(pep.name + " ha " + pep.age + " anni.");
});

const numbers4 = [5, 12, 8, 130, 44];
let numeroMaggiore = numbers4.find((numeroMaggiore) => numeroMaggiore >= 20);
console.log(numeroMaggiore);

const persone = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 30 },
];
const person = persone.find((person) => person.age > 30);
console.log("maggiore di 30", person);

const books = [
  { title: "Il Signore degli Anelli", author: "J.R.R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "Harry Potter e la Pietra Filosofale", author: "J.K. Rowling" },
  { title: "La Fattoria degli Animali", author: "George Orwell" },
];
const author = "George Orwell";
const firstBook = books.find((book) => book.author === author);
console.log(firstBook);

const products = [
  { name: "Laptop", quantity: 5 },
  { name: "Smartphone", quantity: 0 },
  { name: "Tablet", quantity: 8 },
  { name: "Monitor", quantity: 0 },
];
const quantity = 0;
const prodotto = products.find((products) => products.quantity === 0);
console.log("prodotto esaurito", prodotto);

const persona2 = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
};
console.log(
  `La persona si chiama ${persona.nome} ${persona.cognome}, e ha ${persona.eta} anni`
);

