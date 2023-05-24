/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let left = number
        .slice(0, 3)
        .split("")
        .reduce((a, b) => parseInt(a) + parseInt(b));
    let right = number
        .slice(3)
        .split("")
        .reduce((a, b) => parseInt(a) + parseInt(b));
    return left === right ? true : false;
}
console.log(checkTicket("133700"));

module.exports = checkTicket;
