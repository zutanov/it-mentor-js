/**

 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */

const { compareScriptCovs } = require("@bcoe/v8-coverage");

const without = (object, ...args) => {
  //   const keys = Object.entries(object);
  //   const obj = {};
  //   for (let i = 0; i < keys.length; i++) {
  //     for (let j = 0; j < args.length; j++) {
  //       console.log(keys[i][0]);
  //       console.log(args[j]);
  //       if (keys[i] !== args[j]) {
  //         return keys[i];
  //       }
  //     }
  //   }
  args.forEach((el) => delete object[el]);
  return object;
};

const data = { a: 1, b: 2, c: 3 };
console.log(without(data, "b", "c")); // { a: 1 }
