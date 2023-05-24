/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    let newDate = date.split(".");
    let arr = [newDate[1], newDate[0], newDate[2]].join(".");
    const restDays = 14 * 86400000 + 21600000;
    let dates = Date.parse(arr);
    let res = new Date(dates + restDays).toLocaleDateString();
    return res;
}
console.log(vacation("22.02.2021"));

module.exports = vacation;
