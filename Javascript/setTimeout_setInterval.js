//setTimeout//

function hello() {
  console.log("Hello World");
}

setTimeout(() => {
  console.log("Hello World");
}, 1000);

//setInterval//

function hello() {
  console.log("Hello World");
}

let counter = 0;

const id = setInterval(() => {
  counter++;
  console.log(`Interval 1 - ${counter}`);
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, 5000);
