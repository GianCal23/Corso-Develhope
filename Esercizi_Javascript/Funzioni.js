/*Esercizio 29 - Le funzioni//
Scrivi una funzione di nome printName che semplicemente stampi il tuo nome.

Indicazioni utili:

per stampa intendiamo il console.log()
la funzione non deve restituire nulla
la funzione non prenderà parametri in ingresso
il risultato finale dovrà essere il tuo nome stampato sul terminale*/
function printName(name) {
  return name;
}
let Myname = "Giancosimo";
console.log(Myname);

/*Esercizio - Le funzioni//
Scrivi una funzione di nome sayHelloName che prende come parametro una stringa. Questa funzione deve restituire la concatenazione di due stringhe, per capirci, il risultato finale dovrà essere: 'Hello John'. In questo caso, John è la stringa che passiamo come parametro alla funzione (cioè il nostro nome).

Indicazioni utili:

La funzione dovrà prendere come parametro una stringa
Il parametro in ingresso sarà il nostro nome
La funzione restituisce 'Hello' seguito dal nostro nome
Abbiamo la possibilità in JavaScript di concatenare le stringhe (es. str1 + str2)
Il risultato finale dovrà essere il tuo 'Hello nome' stampato sul terminale*/

function sayHelloName(name) {
  return `Hello ${name}`;
}
let ciao = sayHelloName("Giancosimo");
console.log(ciao);

