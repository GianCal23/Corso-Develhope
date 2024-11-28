/* Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.*/

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolve) {
        const data = { name: "John", age: 30 };
        resolve(data);
      } else {
        reject("Errore nel recupero dei dati dall'API");
      }
    }, 1000);
  });
}
fetchDataFromAPI().then((data) => {
  console.log("Dati ricevuti:", data);
});

/*-Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
-La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
-Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.*/

function displayValue(valuetoDisplay) {
  console.log(valuetoDisplay);
}

function fetchUserData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const response = { id: 1, name: "John" };
      res(response);
    }, 2000);
  });
}

function fetchUserPosts(userId, userName) {
  console.log("Recupero posty utente", userId, userName);

  return new Promise((res, rej) => {
    setTimeout(() => {
      const response = ["Post 1", "Post 2", "Post 3"];
      res(response);
    }, 2000);
  });
}

fetchUserData().then((userData) => {
  fetchUserPosts(userData.id, userData.name).then((userPost) => {
    displayValue(`${userData.name},${userPost.join(", ")}`);
  });
});

/*-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
-Utilizzare setTimeout per simulare un'operazione asincrona.*/

function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("La Promise è stata risolta dopo 2 secondi!");
    }, 2000);
  });
}
waitTwoSeconds().then((message) => {
  console.log(message);
});

/*-Crea una Promise che simula il recupero dei dati da un'API.
A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore. 
-Crea una variabile chiamata success con un valore numerico random da 0 a 0.5 
-La chiamata avrà successo con il messaggio Data retrieved successfully 
Se il valore random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch data*/

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve("Data retrieved successfully");
      } else {
        reject("Error: Failed to fetch data");
      }
    }, 2000);
  });
}

fetchDataFromAPI()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

/*Convertire la seguente funzione basata su callback in una funzione basata su Promise.*/

function callback_BasedFunction(arg1, arg2, callback) {
  setTimeout(() => {
    const result = arg1 + arg2;
    if (result % 2 !== 0) {
      callback(null, result);
    } else {
      callback(new Error("Result is not odd!"), null);
    }
  }, 1000);
}

function promisifiedFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {
    callback_BasedFunction(arg1, arg2, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

promisifiedFunction(2, 3)
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

promisifiedFunction(2, 4)
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

/*Implementare le funzioni fetchPersonById e fetchJobById, le quali dato un id devono restituire rispettivamente:
La persona che ha come identificativo l'id passato come parametro
Il tipo di lavoro che ha come identificativo l'id passato come parametro
Infine implementare il codice necessario che si occupa di stampare in console la persona e il tipo di lavoro trovato. 
N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le Promise sono state risolte.*/

const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

function fetchPersonById(id) {
  return (promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((person) => person.id == id);
      if (person) {
        return resolve(person);
      } else {
        return reject(`No person with id ${id}`);
      }
    }, 3000);
  }));
}
function fetchJobById(id) {
  return (promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((job) => job.id == id);
      if (job) {
        return resolve(job);
      } else {
        return reject(`No job with id ${id}`);
      }
    }, 2000);
  }));
}
