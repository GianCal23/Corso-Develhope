
/*Esercizio 31 - Le callback
  Scrivere due funzioni, la prima funzione si chiamerà HelloName, questa prenderà come parametro una callback che sarà la nostra seconda funzione di nome Print. La nostra funzione printName dovrà semplicemente fare un console.log() del nostro nome (ricordiamoci che sarà la funzione di callback). La funzione HelloName, prende come parametro una callback, e dovrà prima fare un console.log() della stringa 'Hello' e dopo chiamare la funzione che prende come parametro.
  
  Indicazioni utili:
  
  Il risultato finale sarà "Hello" "Nome", stampato sul vostro terminale*/
function Hello(callback) {
  console.log("Hello");
  callback();
}
function Name() {
  console.log("Giancosimo");
}
Hello(Name);

/*Esercizio - Le callback
Partendo dall'esercizio precedente, vogliamo aggiungere un delay quando andiamo a stampare il nostro "Hello" "Nome". Per fare questo, andremo ad utilizzare la funzione di JavaScript setTimeout(), questa come avete visto nel video, prende due parametri: il primo parametro è una funzione, il secondo sono i millesimi di secondo di delay. Nel nostro esercizio, vogliamo che la funzione sayHelloName abbia al suo interno un setTimeout(), che stampi dopo 1 secondo il nostro "Hello" "Name".*/
function Name(name) {
  setTimeout(function () {
    console.log("Hello ", name);
  }, 1000);
}
Name("Giancosimo");
