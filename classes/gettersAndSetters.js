/**
 * Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
 * Наш класс теперь будет работать так:
 */

class Worker {
  #name;
  #surname;
  #rate = 10;
  #days = 31;
  constructor(name, surname) {
    this.#name = name;
    this.#surname = surname;
  }
  getName() {
    return this.#name;
  }

  getSurname() {
    return this.#surname;
  }

  getRate() {
    return this.#rate;
  }

  setRate(value) {
    this.#rate = value;
  }

  getDays() {
    return this.#days;
  }

  setDays(value) {
    this.#days = value;
  }
  getSalary() {
    return this.#rate * this.#days;
  }
}

const worker = new Worker("Иван", "Иванов");

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

/**
 * Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.
 * Наш класс теперь будет работать так:
 */

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
