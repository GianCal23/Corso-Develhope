//Dato un oggetto person con le proprietà nome ed età, utilizza la destrutturazione dell'oggetto per creare variabili nome ed età che contengano i valori dell'oggetto.//

const person = { Name: "Alice", age: 30 };

const { Name, age } = person;

console.log(Name);
console.log(age);

//Dato uno studente oggetto nidificato con informazioni sulle proprietà e voti, utilizza la destrutturazione dell'oggetto per creare variabili nome, età e voto che contengano i valori dell'oggetto nidificato.//

const student = {
  info: { Name: "Bob", age: 25 },
  grades: { math: 95, science: 89 },
};

const {
  info: { Name, age },
  grades: { math, science },
} = student;
console.log(Name, age, math, science);

//Dato un array di colori con tre elementi, utilizza la destrutturazione dell'array per creare variabili firstColor, secondColor e ThirdColor che contengono i valori dell'array.//

const colors = ["red", "green", "blue"];

const [firstColor, secondColor, ThirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(ThirdColor);

//Date due variabili a e b, scambia i loro valori usando la destrutturazione.//

let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a);
console.log(b);
