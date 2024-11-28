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
