// /*Esercizio 31 - Le callback
//   Scrivere due funzioni, la prima funzione si chiamerà HelloName, questa prenderà come parametro una callback che sarà la nostra seconda funzione di nome Print. La nostra funzione printName dovrà semplicemente fare un console.log() del nostro nome (ricordiamoci che sarà la funzione di callback). La funzione HelloName, prende come parametro una callback, e dovrà prima fare un console.log() della stringa 'Hello' e dopo chiamare la funzione che prende come parametro.

//   Indicazioni utili:

//   Il risultato finale sarà "Hello" "Nome", stampato sul vostro terminale*/
// function Hello(callback) {
//   console.log("Hello");
//   callback();
// }
// function Name() {
//   console.log("Giancosimo");
// }
// Hello(Name);

// /*Esercizio - Le callback
// Partendo dall'esercizio precedente, vogliamo aggiungere un delay quando andiamo a stampare il nostro "Hello" "Nome". Per fare questo, andremo ad utilizzare la funzione di JavaScript setTimeout(), questa come avete visto nel video, prende due parametri: il primo parametro è una funzione, il secondo sono i millesimi di secondo di delay. Nel nostro esercizio, vogliamo che la funzione sayHelloName abbia al suo interno un setTimeout(), che stampi dopo 1 secondo il nostro "Hello" "Name".*/
// function Name(name) {
//   setTimeout(function () {
//     console.log("Hello ", name);
//   }, 1000);
// }
// Name("Giancosimo");

// /*Scrivi una funzione chiamata doubleArray che accetta un array e una funzione di callback come argomenti.
// doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo array con i valori trasformati.*/

// function doubleArray(arr, callback) {
//   return arr.map(callback);
// }
// function doubleValue(num) {
//   return num * 2;
// }
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = doubleArray(numbers, doubleValue);
// console.log(doubledNumbers);

// /*Crea una funzione chiamata delay che accetta una funzione di callback e un ritardo temporale in millisecondi come argomenti.
// delay dovrebbe eseguire la funzione di callback dopo il ritardo specificato.*/

// function delay(callback, delayTime) {
//   setTimeout(callback, delayTime);
// }
// function sayHi() {
//   console.log("Hi, there!");
// }
// delay(sayHi, 2000);

/*Scrivi una funzione chiamata filterArray che accetta un array e una funzione di callback come argomenti. -La funzione callback deve filtrare e restituire i numeri pari passati come argomento alla funzione filterArray
filterArray dovrebbe restituire un nuovo array contenente solo gli elementi per i quali la funzione di callback restituisce true.*/

function filterArray(arr, callback) {
  return arr.filter(callback);
}

function isEven(num) {
  return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers);

/*Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.*/

function runCallbacks(callbacks) {
  callbacks.forEach((callback) => callback());
}
function firstCallback() {
  console.log("First Callback");
}
function secondCallback() {
  console.log("Second Callback");
}

function thirdCallback() {
  console.log("Third Callback");
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);

/*Crea una funzione che accetta due numeri come argomenti e una funzione di callback.
La funzione dovrebbe eseguire un'operazione matematica sui numeri e passare il risultato alla funzione di callback.
Ad esempio, puoi creare una funzione per aggiungere due numeri e passare una funzione di callback che visualizza il risultato.*/

function performOperation(a, b, callback) {
  callback(a + b);
}

function displayResult(result) {
  console.log("Result is: " + result);
}

performOperation(5, 3, displayResult);

/*Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.*/

function fetchDataFromAPI(callback) {
  setTimeout(function () {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 2000);
}

function handleData(data) {
  console.log("Received data: " + JSON.stringify(data));
}

fetchDataFromAPI(handleData);
