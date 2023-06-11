// SetTimeout

const className = require("@sinonjs/commons/types/class-name");
const { black } = require("color-name");
const { reject, get } = require("lodash");
const { resolve } = require("path");
const { func } = require("prop-types");

// console.log("1");
// setTimeout(() => {
//   setTimeout(() => {
//     console.log("3");
//   }, 1000);
//   console.log("2");
// }, 1000);

// setTimeout(() => {
//   console.log("5");
// }, 2000);
// console.log("4");

//===================================================
// Promise
// let p = new Promise(() => {});
// console.log(p);

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("oops")), 1000);
// });

// promise.then(
//   (result) => console.log(result),
//   (error) => console.log(error.message)
// );

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// delay(3000).then(() => console.log("done"));

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }

//   then(resolve, reject) {
//     console.log(resolve);
//     setTimeout(() => resolve(this.num * 2), 1000);
//   }
// }

// new Promise((resolve) => resolve(1))
//   .then((res) => new Thenable(res))
//   .then((res) => console.log(res));

//===========================================

// function loadJson1(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("no-such-user.json") // (3)
//   .catch(alert); // Error: 404

// async function loadJson(url) {
//   let res = await fetch(url);
//   if (res.status === 200) {
//     let data = await res.json();
//     return data;
//   }
//   throw new Error(res.status);
// }

// loadJson("no-such-user.json") // (3)
//   .catch(console.log("IT works")); // Error: 404

//Вызовите async–функцию из "обычной"
//Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}
//P.S. Технически задача очень простая, но этот вопрос часто задают разработчики, недавно познакомившиеся с async/await.
//решение
//Это тот случай, когда понимание внутреннего устройства работы async/await очень кстати.
//Здесь нужно думать о вызове функции async, как о промисе. И просто воспользоваться .then:

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // покажет 10 через 1 секунду
  wait().then((result) => alert(result));
}

f();

async function thingOne() {
  return 1;
}
async function thingTwo(value) {
  return value;
}
async function thingThree(value) {
  return value;
}
async function doManyThings() {
  var result = await thingOne();
  var resultTwo = await thingTwo(result);
  var finalResult = await thingThree(resultTwo);
  return finalResult;
}
doManyThings().then((res) => console.log(res));

const isMomHappy = true;

const getPlaystation = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    const model = {
      version: "ps5",
      memory: "825GB",
      controller: 1,
      isDiscSupported: true,
    };
    resolve(model);
  } else {
    const badAccident = new Error("Not this time");
    reject(badAccident);
  }
});

// console.log(getPlaystation.__proto__);
// console.log(typeof getPlaystation);

const show = (data) => {
  let message = `I'm bought a new ${data.version} of ${data.color} color`;
  return new Promise((resolve) => resolve(message));
};

getPlaystation
  .then((res) => {
    res.color = "black";
    return res;
  })
  .then(show)
  .then((res) => console.log(res))
  .catch((e) => {
    console.log(e.message);
  });

// console.log("Hi!");

// setTimeout(function timeout() {
//   console.log("1");
//   setTimeout(function timeout() {
//     console.log("2");
//   }, 0);
// }, 0);

// setTimeout(function timeout() {
//   console.log("3");
// }, 0);

// console.log("Welcome to loupe.");

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000);
  });
  let result = await promise; // будет ждать, пока промис не выполнится (*)
  console.log(result); // "готово!"
}
f();
console.log("1");
