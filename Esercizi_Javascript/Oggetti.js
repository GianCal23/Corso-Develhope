/*Esercizio - Introduzione agli oggetti//
dropdown menu
Crea un oggetto di nome car, che abbia al suo interno due proprietà: name, color.
Stampa il valore delle due proprietà di questo oggetto*/
let car = {
  Name: "Punto",
  color: "blue",
};
console.log(car);

/*Esercizio - Il ciclo for in//
Partendo dall'oggetto creato nell'esercizio precedente, scrivi un ciclo for in dove stampiamo le chiavi dell'oggetto fruits*/
let fruits = {
  name: "Mela",
  color: "Red",
};
for (let key in fruits) {
  console.log(key, fruits);
}
