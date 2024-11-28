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

//Gli oggetti//
let person = {
  name: "Jimmy",
  age: 42,
  sayHello: function () {
    console.log("Hello!");
  },
};
person.sayHello();

let age = person.age + 20; //accesso in lettura//
console.log(age);

person.age = person.age + 1; //accesso in scrittura//
person.favoriteColor = "blue";
console.log(person.age);
console.log(person.favoriteColor);

//L'operatore in e il ciclo for in//
let persona = {
  name: "Jimmy",
  age: 28,
};
if ("age" in persona) {
  persona.age = persona.age + 1;
} else {
  console.log("età non presente");
}
console.log(persona.age);
for (let key in person) {
  console.log(key, persona[key]);
}

//Il metodo costruttore//
function Fruits(name, color, number) {
  this.name = name;
  this.color = color;
  this.number = number;

  this.growUp = function () {
    this.num += +1;
  };

  this.sayHello = function () {
    console.log(
      "Hello my name is " +
        this.name +
        " and I am " +
        this.color +
        " and we are " +
        this.number
    );
  };
}

let Apple = new Fruits("apple", "red", 15);
let Melon = new Fruits("Melon", "Green", 7);
let Grapefruit = new Fruits("Grapefruit", "yellow", 4);

Apple.sayHello();
Melon.sayHello();
Grapefruit.sayHello();

//Gli oggetti nidificati//
let person2 = {
  name: "Angel",
  age: 22,
  adress: {
    city: "Milano",
    streetName: "via delle vie",
    number: 22,
    otherData: {
      foo: "1234",
      bar: "456",
    },
  },
};
console.log(person2);

//Gli array//
let persons = ["Billy", "Kate", "Jimmy", "Jane"];
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}

let persons2 = [
  { name: "Jimmy", age: 32 },
  { name: "Billy", age: 22 },
];
for (let i = 0; i < persons2.length; i++) {
  const persons = persons2[i];
  console.log(persons.age);
}

//I metodi degli array//

let numbers2 = [1, 2, 3, 4, 5];

numbers2.push(4); //aggiunge un elemento al fondo dell'array
console.log(numbers2);

numbers2.pop(); //elimina un elemento dal fondo dell'array, può essere chiamato più volte o inserito all'interno di una variabile per restituire il valore tolto
console.log(numbers2);

numbers2.unshift(0); //aggiunge un elemento in testa all'array
console.log(numbers2);

numbers2.shift(); //rimuove un elemento dalla testa dell'array
console.log(numbers2);

let names2 = ["Billy", "Jimmy", "Kate"];
console.log(names2.join(", ")); //aggiunge un carattere all'interno della stringa

names2.forEach((item) => {
  console.log(item);
}); //metodo per iterare all'interno di un array

//I metodi degli Array e la destrutturazione//

const Numbers = [1, 2, 3, 4, 5];
const doubled = Numbers.map((Number) => Number * 2); //permette di trasformare ogni elemento di un array e restituirne uno nuovo
console.log(doubled);

const sum2 = Numbers.reduce(
  (a, number) => a /*accumulatore*/ + number,
  0 /*valore di partenza*/
); //permette di ridurre un array a un singolo valore
console.log(sum2);

const Users = [
  {
    name: "Mario",
    sursame: "Rossi",
    age: 25,
  },
  {
    name: "Paolo",
    sursame: "Verdi",
    age: 15,
  },
  {
    name: "Luca",
    sursame: "Bianchi",
    age: 60,
  },
];

const myUser = Users.find((user) => user.name === "Paolo"); //ritorna il primo elemento di un array che soddisfa la condizine fornita
console.log(myUser);

const myUser2 = Users.filter((user) => user.age >= 18 && user.name === "Paolo"); //permette di creare un nuovo array contenente solo gli elementi che soddisfano una certa condizione
console.log(myUser2);
//permette di ridurre un array a un singolo valore

//I template strings (Alt+096)//
const Firstname = "Mario";

function getName() {
  return "Mario";
}

const myString = `Hello, ${Firstname}`; //ritorna il valore della variabile
console.log(myString);

const myString2 = `Hello, ${getName()}`; //ritorna il valore della funzione
console.log(myString2);

const x = 5;
const y = 10;

const myString3 = `X + Y is ${x + y}`; //ritorna il valore di un espressione
console.log(myString3);

const myString4 = `This is my 
text on multiple lines 
Template literals!!!`; //ritorna i valori su linee multiple senza utilizzare caratteri di escape (\n \)
console.log(myString4);

//La destrutturazione//

const numbers = [1, 2, 3, 4, 5];
const [firstElement, z, secondElement] = numbers; //nel caso degli array la posizione da estrarre è fondamentale

console.log(firstElement);
console.log(secondElement);
console.log(z);

const Student2 = {
  Firstname2: "Mario",
  Lastname: "Rossi",
  Age: 25,
  X: "prova",
};
const { Age, Firstname2, X: myVar /*rinominare una variabile*/ } = Student2; //nel caso degli oggetti il nome da estrarre deve essere identico alla proprietà dell'oggetto

console.log(Firstname2);
console.log(Age);
console.log(myVar);

function logStudentName({ Firstname2 }) {
  console.log(Firstname2);
} //destrutturare prendendo solo la proprietà da stampare

logStudentName(Student2);

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
