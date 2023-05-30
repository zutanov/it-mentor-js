const { memo } = require("react");
const { name } = require("xml-name-validator");

class Character {
  constructor(speed, fly) {
    this.speed = speed;
  }
  move = () => console.log(`I'm moving with speed of ${this.speed}`);
}

const flying = (obj) => {
  obj.flying = () => console.log(`I can fly like an plane ${obj.fly}`);
};

class Enemy extends Character {
  constructor(name, phrase, power, speed) {
    super(speed);
    this.name = name;
    this.phrase = phrase;
    this.power = power;
  }
  sayPhrase = () => {
    console.log(this.phrase);
  };
  attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
  move = () => console.log(`My speed is ${this.speed}`);
}

class Alien extends Character {
  #planet;
  constructor(name, phrase, power, speed, planet, fly) {
    super(speed);
    this.name = name;
    this.phrase = phrase;
    this.power = power;
    this.#planet = planet;
    this.fly = fly;
  }
  sayPhrase = () => {
    console.log(this.phrase);
  };
  attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
  planetOfBirth = () =>
    console.log(`I was born in planet named - ${this.#planet}`);
}

class newAlien extends Alien {
  constructor(name, phrase, speed, planet, fly, move, planetOfBirth) {
    super(name, phrase, speed, planet, fly, move, planetOfBirth);
    this.planet = planet;
  }
}

const newAlien1 = new newAlien(
  "new Alien",
  "I'm new Alien in the world",
  299,
  197,
  "Muspelheim",
  "Valkirya"
);
newAlien1.planet = "Asgard";
console.log(newAlien1.move());

const enemy1 = new Enemy("Morphius", "I'm a big black guy", 99, 55);
enemy1.sayPhrase();
enemy1.attack();
enemy1.move();
console.log("===============================================");
const alien1 = new Alien(
  "Alien",
  "I'm the most dangerous beast in the world",
  199,
  97,
  "Asgard",
  "Boing 777"
);
// alien1.sayPhrase();
// alien1.attack();
// alien1.move();
alien1.planetOfBirth();
flying(alien1);
alien1.flying();

// console.log(typeof Enemy);

// Learnjavascript

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

// let clock = new Clock({ template: "h:m:s" });
// clock.start();
// clock.stop();

//=========================================================
//Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.

class ExtendedClock extends Clock {
  constructor({ template, precision }) {
    super({ template });
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
let clock1 = new Clock({ template: "h:m:s", presicion: 5000 });
clock1.start();

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит неподвижно.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!

//===============================================================

//Ошибка создания экземпляра класса
//В коде ниже класс Rabbit наследует Animal.
//К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {
  #test = "hi";
  constructor(name) {
    this.name = name;
  }
  set surname(value) {
    this._surname = value;
  }

  get surname() {
    console.log(this.#test);
    return this._surname;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit1 = new Rabbit("Белый кролик"); // Error: this is not defined
rabbit1._surname = "white";
console.log(rabbit1.surname);

const user = {
  name: "User",
  age: 30,
};

const admin = {
  name: "Admin",
};
for (let key in user) {
  admin[key] = user[key];
}
let player = Object.assign({}, user);
console.log(player);
console.log(admin);

const map1 = new Map();
console.log(typeof map1);
map1.set("name", "Andrew");
map1.set("age", "30");
console.log(map1.forEach((el) => console.log(el)));

// Мемоизация
const fib = (n, memo) => {
  memo = memo || {};
  if (memo[n]) return memo[n];
  if (n <= 1) return 1;
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
};

console.log(fib(9));
