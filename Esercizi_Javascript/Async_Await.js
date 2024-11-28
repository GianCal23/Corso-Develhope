/*La funzione caricamentoDati simula il caricamento di dati asincroni con un ritardo di 2 secondi!
Implementa la funzione ottieniDatiu tilizzando await per attendere il caricamento dei dati, quindi visualizza i dati ottenuti in console.*/

function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}

async function ottieniDati() {
  try {
    const dati = await caricamentoDati();
    console.log(dati);
  } catch (error) {
    console.log("si è verificato un errore", error);
  }
}
ottieniDati();

/*In questo esercizio andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!
La funzione "caricaModulo" ritorna una promise simulando il caricamento di un modulo con un ritardo di 2 secondi!
Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.
Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".*/

function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

async function lanciaVeicoloSpaziale() {
  try {
    const moduloA = await caricaModulo("A");
    console.log(moduloA);

    const moduloB = await caricaModulo("B");
    console.log(moduloB);

    const moduloC = await caricaModulo("C");
    console.log(moduloC);
    console.log("Veicolo spaziale pronto per il lancio!");
  } catch (error) {
    console.log("Errore moduli", error);
  }
}
lanciaVeicoloSpaziale();

/*In questo esercizio, come nel precendente andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!
ATTENZIONE : il caricamento dei moduli in questo esercizio non sempre potrebbe riuscire!
Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.
Gestisci eventuali errori nel caricamento dei moduli stampando in console "Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."
Alla fine, se tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".*/

function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000;
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}

async function lanciaVeicoloSpaziale() {
  try {
    const ModuloA = await caricaModulo("A");
    console.log(ModuloA);

    const ModuloB = await caricaModulo("B");
    console.log(ModuloB);

    const ModuloC = await caricaModulo("C");
    console.log(ModuloC);
    console.log("Veicolo spaziale pronto per il lancio!");
  } catch (error) {
    console.log(
      "Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.",
      error
    );
  }
}
