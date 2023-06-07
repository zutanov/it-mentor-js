const { merge } = require("lodash");

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

// console.log(admin.fullName); // John Smith (*)

// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
// console.log(admin.fullName);  // { name: 'John', surname: 'Smith', fullName: [Getter/Setter] }
// console.log(user);            // Alice Cooper

//======================================================================================
//Метод автоматически берётся из прототипа:
//Цепочка прототипов может быть длиннее:

let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk взят из цепочки прототипов
// longEar.walk(); // Animal walk

rabbit.walk = function () {
  console.log("It's a longEar here!");
};

// console.log(longEar.jumps); // true (из rabbit)
// longEar.walk(); // It's a longEar here!
// rabbit.walk(); // Animal walk

//=======================================================

//Вызов rabbit.sleep() устанавливает this.isSleeping для объекта rabbit:
// методы animal
let animal1 = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit1 = {
  name: "White Rabbit",
  __proto__: animal1,
};

// модифицирует rabbit.isSleeping
rabbit1.sleep();

//console.log(rabbit1.isSleeping); // true
//console.log(animal1.sleep()); // undefined (нет такого свойства в прототипе)
//console.log(animal1.isSleeping); // undefined (нет такого свойства в прототипе)

// tasks:
// В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?

let animal2 = {
  jumps: null,
};
let rabbit2 = {
  __proto__: animal2,
  jumps: true,
};

// console.log(rabbit2.jumps); // ? (true) true, берётся из rabbit.
delete rabbit2.jumps;
// console.log(rabbit2.jumps); // ? (null) null, берётся из animal.
delete animal2.jumps;
// console.log(rabbit2.jumps); // ? (undefined) undefined, такого свойства больше нет.

//Алгоритм поиска
//Задача состоит из двух частей.
//У нас есть объекты:

// 1. С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// 2. Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

let head = { glasses: 1 };

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// console.log(pockets.pen);
// console.log(bed.glasses);

//Куда будет произведена запись?
//Объект rabbit наследует от объекта animal.
//Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal3 = {
  eat() {
    this.full = true;
  },
};

let rabbit3 = {
  __proto__: animal3,
};
rabbit3.eat();

//Ответ: rabbit.
//Поскольку this – это объект, который стоит перед точкой, rabbit.eat() изменяет объект rabbit.
//Поиск свойства и исполнение кода – два разных процесса. Сначала осуществляется поиск метода rabbit.eat в прототипе, а затем этот метод выполняется с this=rabbit.

//4. Почему наедаются оба хомяка?
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster1 = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};
let speedy1 = {
  __proto__: hamster1,
};
let lazy1 = {
  __proto__: hamster1,
};
// Этот хомяк нашёл еду
speedy1.eat("apple");
// console.log(speedy1.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy1.stomach); // apple
//Давайте внимательно посмотрим, что происходит при вызове speedy.eat("apple").
//Сначала в прототипе (=hamster) находится метод speedy.eat, а затем он выполняется с this=speedy (объект перед точкой).
//Затем в this.stomach.push() нужно найти свойство stomach и вызвать для него push. Движок ищет stomach в this (=speedy), но ничего не находит.
//Он идёт по цепочке прототипов и находит stomach в hamster.
//И вызывает для него push, добавляя еду в живот прототипа.
//Получается, что у хомяков один живот на двоих!
//И при lazy.stomach.push(...) и при speedy.stomach.push(), свойство stomach берётся из прототипа (так как его нет в самом объекте), затем в него добавляются данные.
//Обратите внимание, что этого не происходит при простом присваивании this.stomach=:

let hamster2 = {
  stomach: [],

  eat(food) {
    // присвоение значения this.stomach вместо вызова this.stomach.push
    this.stomach = [food];
  },
};

let speedy2 = {
  __proto__: hamster2,
};

let lazy2 = {
  __proto__: hamster2,
};

// Шустрый хомяк нашёл еду
speedy2.eat("apple");
// console.log(speedy2.stomach); // apple

// Живот ленивого хомяка пуст
// console.log(lazy2.stomach); // <ничего>
// Теперь всё работает правильно, потому что this.stomach= не ищет свойство stomach. Значение записывается непосредственно в объект this.
// Также мы можем полностью избежать проблемы, если у каждого хомяка будет собственный живот:
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// Шустрый хомяк нашёл еду
speedy.eat("apple");
// console.log(speedy.stomach); // apple

// Живот ленивого хомяка пуст
// console.log(lazy.stomach); // <ничего>
// Все свойства, описывающие состояние объекта (как свойство stomach в примере выше), рекомендуется записывать в сам этот объект. Это позволяет избежать подобных проблем.

//Можно не повторяться, и создавать животики в методе прототипа, например так:

let hamster3 = {
  eat(food) {
    if (!this.stomach) {
      this.stomach = [];
    }
    this.stomach.push(food);
  },
};

let speedy3 = {
  __proto__: hamster3,
};

let lazy3 = {
  __proto__: hamster3,
};
// Этот хомяк нашёл яблоко
speedy3.eat("apple");
// console.log(speedy3.stomach); // apple

// А этот хомяк нашел банан
lazy3.eat("banana");
lazy3.eat("banana1");
// console.log(lazy3.stomach); // banana

//=================================================
// Встроенные прототипы
// Добавить функциям метод "f.defer(ms)"
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};
function f() {
  console.log("Hello!");
}
//f.defer(1000); // выведет "Hello!" через 1 секунду

// try {
//   setTimeout(function () {
//     noSuchVariable; // скрипт упадёт тут
//   }, 1000);
// } catch (e) {
//   alert("не сработает");
// }

function func() {
  try {
    return 1;
  } catch (e) {
    /* ... */
  } finally {
    console.log("finally");
  }
}

//console.log(func()); // сначала срабатывает alert из finally, а затем этот код

// Наследование от SyntaxError
// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
// Класс должен поддерживать свойства message, name и stack.
// Пример использования:
class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
  }
}

let err = new FormatError("ошибка форматирования");

// console.log(err.message); // ошибка форматирования
// console.log(err.name); // FormatError
// console.log(err.stack); // stack

// console.log(err instanceof FormatError); // true
// console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)

function pow(a, b) {
  if (b === 1) return a;
  return a * pow(a, b - 1);
}
//console.log(pow(5, 3));

const arr = [3, 100, 2, 4, 55, 70, 63, 250];
let max = 0;
let i = 0;
function findMax(max, arr) {
  if (max < arr[i]) max = arr[i];
  if (i === arr.length) return max;
  i++;
  return findMax(max, arr);
}
//console.log(findMax(max, arr));

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
//console.log(max);

// ===================================================
// Рекурсивные обходы
let company = {
  // тот же самый объект, сжатый для краткости
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((a, b) => a + b.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
//console.log(sumSalaries(company));

//Вычислить сумму чисел до данного
function sumTo(n) {
  if (n === 0) return 0;
  return n + sumTo(n - 1);
}
// console.log(sumTo(100));

//Вычислить факториал
const factorial = (n) => (n === 1 ? n : n * factorial(n - 1));
// console.log(factorial(5));

//Числа Фибоначчи
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
// console.log(fib(7));

// Вывод односвязного списка

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function showList(list) {
  if (list.value) console.log(list.value);
  if (list.next) showList(list.next);
}
// console.log(showList(list));

let arr3 = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr2];
arr3.length = 0;
// console.log(arr3);
// console.log(merged);

function add(c, d) {
  console.log(this.a + this.b + c + d);
}
var ten = { a: 1, b: 2 };
//add.call(ten, 3, 4);
// logs => 10
//add.apply(ten, [3, 4]);
// logs => 10
add.bind(ten, 3, 4);
// bindy();

var allNumbers = [23, 11, 34, 56];
//  Используя метод apply(), мы передаём числа:
//console.log(Math.max(...allNumbers)); // 56

// =======================================================
// Try/catch

let a = 10,
  b = "a";

try {
  console.log(a / b);
  console.log(c);
  return console.log("1");
} catch (e) {
  console.log(e.name);
  // console.log(e);
  console.log(e.message);
} finally {
  console.log("Этот текст выведется в любом случае =)");
}

const Animal = function (options) {
  this.name = options.name;
  this.color = options.color;

  this.voice = function () {
    console.log("Base voice from ", this.name);
  };
};

// Animal.prototype.voice = function () {
//   console.log("Base voice from ", this.name);
// };

const dog = new Animal({
  name: "Rex",
  color: "#fff",
});

// console.log(dog);
dog.voice();
//=====================================
// наследование

const Cat = function (options) {
  Animal.apply(this, arguments);
  this.hasTail = options.hasTail;
  this.type = "cat";
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const cat = new Cat({ name: "Murzik", color: "#000", hasTail: true });
// console.log(cat);
cat.voice();

//==========================
// Классы

class Animal1 {
  constructor(options) {
    this.name = options.name;
    this.color = options.color;
  }

  voice() {
    console.log("This is: " + this.name);
  }
}

const dog1 = new Animal1({ name: "Rex", color: "whire" });

class Cat1 extends Animal {
  constructor(options) {
    super(options);
    this.hasTail = options.hasTail;
    this.type = "cat";
  }

  voice() {
    super.voice();
    console.log(this.name + " says myauuhhh");
  }
}

const cat1 = new Cat1({ name: "Murzik", color: "#000", hasTail: true });
console.log(cat1);
cat1.voice();
