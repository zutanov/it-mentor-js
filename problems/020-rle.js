/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(s) {
    return s.replace(/(.)\1+/g, (a, c) => a.length + c);
}
console.log(rle("AAAaaB"));
module.exports = rle;
