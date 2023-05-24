/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    let rgb = "";
    console.log(color[2].repeat(2));
    if (color.length > 4) {
        rgb +=
            parseInt(color.slice(1, 3), 16) +
            ", " +
            parseInt(color.slice(3, 5), 16) +
            ", " +
            parseInt(color.slice(5), 16);
    } else {
        rgb +=
            parseInt(color[1].repeat(2), 16) +
            ", " +
            parseInt(color[2].repeat(2), 16) +
            ", " +
            parseInt(color[3].repeat(2), 16);
    }
    return `rgb(${rgb})`;
}
console.log(hexToRgb("#0f0"));
module.exports = hexToRgb;
