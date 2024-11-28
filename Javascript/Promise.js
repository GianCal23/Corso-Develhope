// const promessa = new Promise((resolve, reject) => {
//   console.log("dentro la promise");
//   //altro codice
//   let result = 1 + 5;
//   if (result % 2 == 0) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promessa.then(
//   () => {
//     console.log("promise risolta");
//   },
//   () => {
//     console.log("promise non risolta");
//   }
// );

//Gestione di più promise//

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved 1");
    }, 2000);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved 2");
    }, 2500);
  });
}

function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved 3");
    }, 3000);
  });
}

function promise4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise resolved 4");
    }, 3500);
  });
}

promise1().then((data) => console.log(data));
promise2().then((data) => console.log(data));
promise3().then((data) => console.log(data));
promise4().then(
  (data) => console.log(data),
  (error) => console.log(error)
);

//metodo .all (ritorna tutte le promise in lista quando vengono risolte o riggettate, in caso di errore si ferma l'esecuzione)//

Promise.all([promise1(), promise2(), promise3(), promise4()]).then(
  (arg) => {
    console.log(".all", arg);
  },
  (error) => {
    console.log("Caso reject", error);
  }
);

//metodo .race (ritorna la prima promise risolta anche in caso di reject di qualche promise )//

Promise.race([promise1(), promise2(), promise3(), promise4()]).then(
  (arg) => {
    console.log(".race", arg);
  },
  (error) => {
    console.log("Caso reject", error);
  }
);

// try catch

function calcolo(a, b) {
  try {
    return a + b + c;
  } catch (error) {
    console.log("il calcolo è fallito", error);
    return "sono un errore";
  }
}
console.log(calcolo(1, 2));

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    try {
      res(1);
    } catch (err) {
      rej(err);
    }
  }, 2000);
});

promise
  .then((response) => {
    console.log("resolved", response);
  })
  .catch((rejection) => {
    console.log("rejected", rejection);
  })
  .finally(() => {
    console.log("sono il finally della primse"); //il finally si può implementare sia nella promise che nella funzione//
  });
