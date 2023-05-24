/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    let res = [];
    const numbers = secret.split("").map((el) => el.charCodeAt(el));
    numbers.map((el) => {
        el == 122
            ? res.push(String.fromCharCode(97))
            : el == 32
            ? res.push(String.fromCharCode(32))
            : res.push(String.fromCharCode(el + 1));
    });
    return res.join("");
}
console.log(decrypt("zmc vd hfmnqd rozbdr"));
module.exports = decrypt;
