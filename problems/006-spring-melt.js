/**
 * Уставшие от необычно теплой зимы, жители решили узнать,
 * действительно ли это самая длинная оттепель за всю историю наблюдений за погодой.
 * Они обратились к синоптикам, а те, в свою очередь,
 * занялись исследованиями статистики за прошлые годы.
 * Их интересует, сколько дней длилась самая длинная оттепель.
 *
 * Напишите функцию getSpringMeltStreak(temperature) помогающую синоптикам вычислить самый длинный период,
 * в который среднесуточная температура ежедневно превышала 0 градусов Цельсия
 *
 * Пример:
 *
 * getSpringMeltStreak([-20, 30, -40, 50, 10, -10]) === 2
 * getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3]) === 4
 * getSpringMeltStreak([-10, 0, -10, 0, -10]) === 0
 *
 * @param {number[]} temperature массив чисел, где каждое – среднесуточная температура в соответствующий день
 * @returns {number}
 */
function getSpringMeltStreak(t) {
    let arr = [];
    let sum = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] > 0) {
            arr.push(1);
        } else {
            arr.push(0);
        }
    }

    const res = arr.join("").split("0");

    for (let i = 0; i < res.length; i++) {
        if (res[i] > sum) {
            sum = res[i];
        }
    }

    return sum.length || 0;
}
console.log(getSpringMeltStreak([-20, 30, -40, 50, 10, -10]));

module.exports = getSpringMeltStreak;
