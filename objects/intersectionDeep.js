/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const { object } = require("webidl-conversions");

const intersectionDeep = (firstObject, secondObject) => {
  let resemble = {};

  for (let k of Object.keys(firstObject)) {
    if (secondObject.hasOwnProperty(k)) {
      resemble[k] = firstObject[k];
    }
    if (typeof firstObject[k]) {
      intersectionDeep(firstObject[k], secondObject[k]);
    }
  }

  return resemble;
  // throw new Error(`Напишите здесь свое решение ${firstObject}, ${secondObject}`);
};

const data = { c: 1, b: { c: 3 } };
const data2 = { d: 1, b: { c: 3 } };
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }
