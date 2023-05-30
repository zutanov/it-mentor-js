/**

 * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * @param {Object<string | number>} firstObject - объект с примитивами
 * @param {Object<string | number>} secondObject - объект с примитивами
 * @returns {boolean}
 */

const isEqual = (firstObject, secondObject) => {
  const first = Object.entries(firstObject);
  const second = Object.entries(secondObject);

  if (first.length !== second.length) return false;

  for (let i = 0; i < first.length; i++) {
    if (first[i][0] !== second[i][0]) return false;
    if (first[i][1] !== second[i][1]) return false;
  }
  return true;
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
