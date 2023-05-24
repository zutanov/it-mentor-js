/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let old = 0;
    let id = undefined;

    list.map((el, idx, arr) => {
        if (el.gender == "Male" && el.age >= old) {
            old = el.age;
            id = arr.indexOf(el);
        }
    });
    return id >= 0 ? id + 1 : id;
}
console.log(census([{ age: 40, gender: "Female" }]));
module.exports = census;
