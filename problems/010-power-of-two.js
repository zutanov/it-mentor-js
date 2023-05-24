/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
let count = 0;
function getPower(n) {
    // count++;
    // n === 1 ? 0 : n === 2 ? 1 : n < 1 ? undefined : n - getPower(n / 2);
    if (n === 1) {
        return 0;
    } else if (n < 1) {
        return;
    } else {
        count++;
        getPower(n / 2);
    }
    return 2 ** count === n ? count : undefined;
}

console.log(getPower(756));

module.exports = getPower;
