/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    if (seconds < 10) {
        return "just now";
    } else if (seconds < 60) {
        return `${Math.floor(seconds / 10) * 10} seconds ago`;
    } else if (seconds < 3600 && Math.floor(seconds / 60) === 1) {
        return `${Math.floor(seconds / 60)} minute ago`;
    } else if (seconds < 3600 && Math.floor(seconds / 60) > 30) {
        return `30 minutes ago`;
    } else if (seconds < 3600 && Math.floor(seconds / 60) > 1) {
        return `${Math.floor(seconds / 60)} minutes ago`;
    } else if (seconds < 86400 && Math.floor(seconds / 3600) === 1) {
        return `${Math.floor(seconds / 3600)} hour ago`;
    } else if (seconds < 86400 && Math.floor(seconds / 3600) > 12) {
        return `12 hours ago`;
    } else if (seconds < 86400 && Math.floor(seconds / 3600) > 1) {
        return `${Math.floor(seconds / 3600)} hours ago`;
    } else if (seconds < 86400 * 7 && Math.floor(seconds / 86400) === 1) {
        return `1 day ago`;
    } else if (seconds < 86400 * 7 && Math.floor(seconds / 86400) > 1) {
        return `a few days ago`;
    } else if (seconds < 1209600) {
        return `1 week ago`;
    } else if (seconds < 86400 * 28) {
        return `${Math.floor(seconds / (86400 * 7))} weeks ago`;
    } else {
        return "undefined";
    }
}
console.log(timeago(1209500));
module.exports = timeago;
