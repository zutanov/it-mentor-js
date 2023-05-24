/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */

const isFibonacci = (n) => {
    let res = 0;
    let i = 0;
    if (n === 0) return 0;
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    while (res < n) {
        res = fibonacci(i++);
    }
    return res === n ? --i : undefined;
};

console.log(isFibonacci(55));
module.exports = isFibonacci;
