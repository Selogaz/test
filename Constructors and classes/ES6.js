class User {
    constructor(name, id) {//Функция-конструктор
        this.name = name;//Она используется для создания новых объектов
        this.id = id;
        this.human = true;
    }
    hello() {
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