/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    let left = 0;
    let right = 0;
    if (value.length % 2 === 0) {
        left = value.slice(0, value.length / 2);
        right = value
            .slice(value.length / 2)
            .split("")
            .reverse()
            .join("");
    } else {
        left = value.slice(0, Math.floor(value.length / 2));
        right = value
            .slice(Math.ceil(value.length / 2))
            .split("")
            .reverse()
            .join("");
    }
    return left === right ? true : false;
}
console.log(isPalindrome("true"));

module.exports = isPalindrome;
