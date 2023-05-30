/**

 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Ожидаемый результат: ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false
 * Пустые значения: '', null, NaN, undefined
 * @param {Object} object - объект с примитивами
 * @returns {boolean}
 */

const isEmpty = (object) => {
  let count = 0;
  const length = Object.values(object).length;
  for (let i in object) {
    if (
      object[i] === "" ||
      object[i] === null ||
      object[i] === NaN ||
      object[i] === undefined
    ) {
      count++;
    }
  }
  return count === length;
};

const data = { a: NaN, b: 2 };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
