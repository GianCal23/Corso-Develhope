//I template strings (Alt+096)//
const Firstname = "Mario";

function getName() {
  return "Mario";
}

const myString = `Hello, ${Firstname}`; //ritorna il valore della variabile
console.log(myString);

const myString2 = `Hello, ${getName()}`; //ritorna il valore della funzione
console.log(myString2);

const x = 5;
const y = 10;

const myString3 = `X + Y is ${x + y}`; //ritorna il valore di un espressione
console.log(myString3);

const myString4 = `This is my 
text on multiple lines 
Template literals!!!`; //ritorna i valori su linee multiple senza utilizzare caratteri di escape (\n \)
console.log(myString4);
