/**
 * На экскурсионном маршруте автобусу высотой 512 см встречаются несколько мостов.
 *
 * Напишите функцию checkBusTour(bridges) вычисляющую номер моста под которым не сможет проехать автобус.
 *
 * Пример:
 *
 * checkBusTour([600, 512]) === 2
 * checkBusTour([600, 1024]) === undefined  # Автобус успешно проедет по маршруту
 *
 * @param {number[]} bridges высоты мостов встречающихся на маршруте
 * @returns {undefined|number}
 */
function checkBusTour(bridges) {
    let res = [];
    bridges.map((el, idx) => {
        if (el <= 512) {
            res.push([idx + 1]);
        } else {
            return undefined;
        }
    });
    return (res[0] && +res[0].join("")) || undefined;
}
console.log(checkBusTour([600, 512, 600, 100]));

module.exports = checkBusTour;
