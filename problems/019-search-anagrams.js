/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(str) {
    const arr = str.replace(/[.,!&]/g, "").split(" ");
    let res = "";
    let res2 = "";
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase().split("").sort().join("");
        for (let j = i + 1; j < arr.length; j++) {
            let word2 = arr[j].toLowerCase().split("").sort().join("");
            if (word.indexOf(word2) === 0) {
                res += arr[i] + " ";
                res2 += " " + arr[j];
            }
        }
    }
    return res.trimEnd() + res2;
}
console.log(searchAnagrams("Вижу апельсин значит живу. Спаниель"));
module.exports = searchAnagrams;
