/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    let arr = value.split("");
    if (arr.length % 2 == 1 || arr.length === 0) return false;

    for (; arr.length !== 0; ) {
        if (arr[0] == ")" || !arr.includes(")")) {
            return false;
        }
        arr.shift();
        arr.splice(arr.indexOf(")"), 1);
    }
    return true;
}

console.log(parentheses(""));
module.exports = parentheses;
