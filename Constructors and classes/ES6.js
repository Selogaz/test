class User {
    constructor(name, id) {//Функция-конструктор, name и id - аргументы
        this.name = name;//Она используется для создания новых объектов
        this.id = id;//свойства класса
        this.human = true;
    }
    hello() {//методы класса
        console.log('Hello: $(this.name)');
    }
    exit() {
        console.log('Пользователь $(this.name) ушел');
    }
}
let ivan = new User('Ivan', 25);
let alex = new User('Alex', 20);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.hello();