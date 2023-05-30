/**

 * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObject - объект с примитивными значениями
 * @param {Object<string | number>} secondObject - объект с примитивными значениями
 * @returns {Object}
 */

const intersection = (firstObject, secondObject) => {
  let resemble = {};
  for (let k in firstObject) {
    for (let j in secondObject) {
      if (k === j && firstObject[k] === secondObject[j]) {
        resemble[k] = secondObject[j];
      }
    }
  }
  return resemble;
  // throw new Error(`Напишите здесь свое решение ${firstObject}, ${secondObject}`);
};

const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }
