//Dati due array, arr1 e arr2, crea un nuovo array chiamato mergedArray utilizzando l'operatore spread che combina gli elementi di entrambi gli array.//

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

//Dati due oggetti, obj1 e obj2, crea un nuovo oggetto chiamato mergedObject utilizzando l'operatore spread che combina le proprietà di entrambi gli oggetti. Se sono presenti proprietà sovrapposte, i valori di obj2 dovrebbero sovrascrivere i valori di obj1.//

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);

//Dato un array originalArray, crea un nuovo array chiamato cloneArray che sia una copia superficiale di originalArray utilizzando l'operatore spread.//

const originalArray = [1, 2, 3, 4, 5];

const cloneArray = [...originalArray];
console.log(cloneArray);
