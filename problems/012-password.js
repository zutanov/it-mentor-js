/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    if (password.length >= 7) {
        if (
            password.match(/[A-Z]/g) &&
            password.match(/[a-z]/g) &&
            password.match(/[0-9]/g)
        ) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
console.log(validatePassword("abc4DEFG"));

module.exports = validatePassword;
