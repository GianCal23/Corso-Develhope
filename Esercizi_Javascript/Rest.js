/*Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.*/

function somma(...params) {
  return params.reduce((a, number) => a + number, 0);
}

const mySum = somma(5, 6, 8, 9, 10);
console.log(mySum);

/*Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
Utilizzare il parametro rest per raccogliere gli argomenti.*/

function filterOutOdds(...num) {
  return num.filter((num) => num % 2 === 0);
}

console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
