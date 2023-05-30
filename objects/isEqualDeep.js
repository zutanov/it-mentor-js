/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */
const isEqualDeep = (firstObject, secondObject) => {
  const first = Object.keys(firstObject);
  const second = Object.keys(secondObject);
  if (first.length !== second.length) return false;

  const compare = first.map((el) => {
    const valueFirst = firstObject[el];
    const valueSecond = secondObject[el];
    if (valueFirst === valueSecond) {
      return true;
    }
    if (typeof valueFirst === "object") {
      return isEqualDeep(valueFirst, valueSecond);
    }
    return false;
  });
  return compare.flat(Infinity).includes(false);
};
const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
