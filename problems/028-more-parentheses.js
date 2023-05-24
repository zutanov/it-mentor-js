/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(braces) {
    if (braces.length == 0) return false;
    while (
        braces.indexOf("{}") != -1 ||
        braces.indexOf("()") != -1 ||
        braces.indexOf("<>") != -1
    ) {
        braces = braces.replace("{}", "").replace("()", "").replace("<>", "");
        console.log(braces);
    }
    return braces.length === 0;
}

console.log(parentheses("<>"));
module.exports = parentheses;
