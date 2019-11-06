function User(name, id) {//Функция-конструктор
    this.name = name;//Она используется для создания новых объектов
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello: ' + this.name);
    };
}
User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' ушел');
};

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.exit();