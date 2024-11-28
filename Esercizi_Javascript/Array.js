/*Scriviamo il nostro primo array. Scrivi un array di nome numbers dove avremo una collezione di numeri da 1 a 10. Di seguito dovremo:

Stampare in console il primo valore
Stampare la lunghezza dell'array
Stampare in console l'ultimo valore
Spiegare il risultato se proviamo a stampare l'elemento dell'array con indice venti*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers[0]);
console.log(numbers[9]);

/*Abbiamo bisogno di scrivere un array che chiameremo students. Questo array conterrà tre oggetti con le seguenti informazioni:

id
name
surname
age
Dobbiamo scrivere queste informazioni per tre studenti diversi. Dopo averlo fatto, vogliamo stampare le info solamente del primo studente.

Indicazioni utili:

Dentro il nostro array, avremo tre oggetti, ogni oggetto conterrà le info di uno studente
Dobbiamo stampare solamente il primo elemento dell'array*/

let students = [
  {
    id: 1,
    name: "Jhon",
    surname: "Lee",
    age: 23,
  },
  {
    id: 2,
    name: "Giulia",
    surname: "Born",
    age: 30,
  },
  {
    id: 3,
    name: "Jimmy",
    surname: "Darn",
    age: 19,
  },
];
console.log(students[0]);

/*Partendo dall'esercizio precedente, tramite un ciclo for, dobbiamo stampare tutti gli elementi contenuti nel nostro array*/

const students2 = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

for (let i = 0; i < students2.length; i++) {
  let students = students2[i];
  console.log(students);
}

/*Abbiamo il nostro array di nomi, dobbiamo svolgere le seguenti operazioni:


Rimuovere il nome "Giovanni" dal nostro array
Aggiungere il nome "Pippo" alla coda del nostro array
Aggiungere il nome "Giovanni" come primo elemento del nostro array
Dopo ogni operazione inserire il console.log() del nostro array names*/

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];
console.log(names);

names.pop();
console.log(names);

names.push("Pippo");
console.log(names);

names.unshift("Giovanni");
console.log(names);

/*Partendo dall'array names, come possiamo stampare tutti i nomi contenuti al suo interno separandoli con un trattino?*/

const names2 = ["Luca", "Marco", "Vittorio", "Giovanni"];
console.log(names2.join(" - "));

/* Partendo dal seguente oggetto students:

Come possiamo rimuovere "Giovanni" e aggiungere lo studente Francesco?

{ id: 3, name: "Francesco", surname: "Verdi", age: 41 } */

const students3 = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

students3.pop({ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 });
students3.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });
console.log(students3);
