//Gli oggetti//
let person = {
  name: "Jimmy",
  age: 42,
  sayHello: function () {
    console.log("Hello!");
  },
};
person.sayHello();

let age = person.age + 20; //accesso in lettura//
console.log(age);

person.age = person.age + 1; //accesso in scrittura//
person.favoriteColor = "blue";
console.log(person.age);
console.log(person.favoriteColor);

//Gli oggetti nidificati//
let person2 = {
  name: "Angel",
  age: 22,
  adress: {
    city: "Milano",
    streetName: "via delle vie",
    number: 22,
    otherData: {
      foo: "1234",
      bar: "456",
    },
  },
};
console.log(person2);

//L'operatore in e il ciclo for in//
let persona = {
  name: "Jimmy",
  age: 28,
};
if ("age" in persona) {
  persona.age = persona.age + 1;
} else {
  console.log("età non presente");
}
console.log(persona.age);
for (let key in person) {
  console.log(key, persona[key]);
}

//Il metodo costruttore//
function Fruits(name, color, number) {
  this.name = name;
  this.color = color;
  this.number = number;

  this.growUp = function () {
    this.num += +1;
  };

  this.sayHello = function () {
    console.log(
      "Hello my name is " +
        this.name +
        " and I am " +
        this.color +
        " and we are " +
        this.number
    );
  };
}

let Apple = new Fruits("apple", "red", 15);
let Melon = new Fruits("Melon", "Green", 7);
let Grapefruit = new Fruits("Grapefruit", "yellow", 4);

Apple.sayHello();
Melon.sayHello();
Grapefruit.sayHello();
