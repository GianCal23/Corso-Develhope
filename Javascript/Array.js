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
