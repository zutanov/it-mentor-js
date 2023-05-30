const { parse } = require("path");

/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {
  constructor() {}
  isEmail(value) {
    if (value.indexOf("@") > 3 && value.length > 6) {
      return true;
    } else {
      return false;
    }
  }
  isDomain(value) {
    if (value.indexOf("@") == -1 && value.split(".").length == 2) {
      return true;
    } else {
      return false;
    }
  }
  isDate(value) {
    if (value.length === 10 && typeof Date.parse(value) === "number") {
      return true;
    } else {
      return false;
    }
  }
  isPhone(value) {
    let number = value.replace(/[+-\s]/g, "");
    if (value[0] == "+" && isNaN(number) === false) {
      return true;
    } else {
      return false;
    }
  }
}

const validator = new Validator();

console.log(validator.isEmail("phphtml@mail.ru"));
console.log(validator.isDomain("phphtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+996 777-77-77")); //тут можете формат своей страны
