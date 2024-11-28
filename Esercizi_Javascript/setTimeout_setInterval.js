/*Utilizza setInterval per chiamare la funzione "visualizzaOrologio" ogni secondo.*/

function visualizzaOrologio() {
  const orarioCorrente = new Date();
  const ore = orarioCorrente.getHours();
  const minuti = orarioCorrente.getMinutes();
  const secondi = orarioCorrente.getSeconds();

  console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
}

setInterval(visualizzaOrologio, 1000);

/*Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
 Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
 Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
 Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.*/

let tempoRimanente = 10;

function contoAllaRovescia() {
  if (tempoRimanente > 0) {
    console.log(`Tempo Rimanente: ${tempoRimanente} secondi`);
    tempoRimanente--;
  } else {
    console.log("Il conto alla rovescia è terminato!");
    clearInterval(intervallo);
  }
}
console.log("Conto alla rovescia in corso...");
const intervallo = setInterval(contoAllaRovescia, 1000);

/*Utilizza setTimeout per chiamare la funzione "mostraPromemoria" dopo un ritardo di 5 secondi.
 Prima che scadano i 5 secondi stampa in console: "Il promemoria è in fase di impostazione".*/

function mostraPromemoria() {
  console.log("Promemoria: È ora di fare una pausa!");
}

console.log("Il promemoria è in fase di impostazione");

setTimeout(mostraPromemoria, 5000);

/*Implementa la funzione lanciaDadi che:

Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."*/

function lanciaDadi() {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  console.log(`Lancio dei dadi: Dado 1= ${dado1}, Dado 2= ${dado2}`);
}
console.log("Lancio dei dadi in corso...");

setTimeout(lanciaDadi, 2000);
