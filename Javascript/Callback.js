function print(item) {
  console.log(item);
}

function test() {
  console.log("test");
}

function somma(a, b, callback) {
  let result = a + b;
  if (callback) {
    callback(result);
  }
  return result;
}

somma(1, 2);

somma(5, 6, print);

somma(10, 24, test);

setTimeout(() => {
  print(console.log("test"));
}, 2000);
