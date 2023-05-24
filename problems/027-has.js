/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
// function has(path, object) {
//     let count = 0;
//     let i = 0;
//     for (let k in object) {
//         console.log(k, path[i]);
//         if (path[i] === k) {
//             count++;
//         }
//         for (let j in object[i]) {
//             console.log(j, path[i]);
//             if (j === path[i]) {
//                 count++;
//             }
//         }
//         i++;
//     }

//     return count === path.length;
// }

function has(path, object) {
    for (var i = 0; i < path.length; i++) {
        if (!object || !Object.prototype.hasOwnProperty.call(object, path[i])) {
            return false;
        }
        object = object[path[i]];
    }
    return true;
}

console.log(
    has(["c"], {
        a: 1,
        o: {
            a: 2,
        },
        n: null,
        "a.b.c": undefined,
    })
);
module.exports = has;
