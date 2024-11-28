function somma(a, b, callback) {
  // callback(a + b);
  return a + b;
}
function stampa(a) {
  console.log(a);
}

somma(2, 3, stampa);

somma(5, 2, (b) => {
  console.log("ciao", b);
});

stampa(somma(5, 4));
