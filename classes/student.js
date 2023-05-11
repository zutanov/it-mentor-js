/**
 * Реализуйте класс Student (Студент), который будет наследовать от класса User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).
 * Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
 * Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
 * Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
 */

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Student {
    // Ваш код...
}

const student = new Student('Иван', 'Иванов', 2020);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иван Иванов'
console.log(worker.year); //выведет 2020console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2023
