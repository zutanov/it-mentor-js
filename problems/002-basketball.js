/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < points.length; i++) {
        first += +points[i].slice(0, 2);
        second += +points[i].slice(3);
    }
    return first > second ? 1 : second > first ? 2 : undefined;
}
console.log(getWinner(["36-18", "22-31", "27-21", "19-34"]));

module.exports = getWinner;
