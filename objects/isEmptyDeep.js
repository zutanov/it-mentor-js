/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

const isEmptyDeep = (object) => {
  for (let k in object) {
    if (
      object[k] === "" ||
      object[k] === null ||
      object[k] === NaN ||
      object[k] === undefined
    ) {
      return false;
    }
    if (typeof object[k] === "object") {
      return isEmptyDeep(object[k]);
    } else {
      return true;
    }
  }
};

const data = { a: { b: undefined } };
const data2 = { a: { b: 1 } };
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
