'use strict';

let a =2;
console.log(a);

let Width = 4;
console.log(Width);

console.log(4/0);//infinity
console.log('string' * 9);//NaN
//console.log(something);//null
let high;
console.log(high);//undefined

let person = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log (person["name"]);
let arr = ['plun.jpg', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);

//alert("hello world");

/*let answer = confirm("Are u here?");

console.log(answer);*/

/*let answer = +prompt("Есть ли вам 18?", "Да");

console.log(typeof(answer));

console.log(+"You" + +"rself");*/

let incr = 10,
    decr = 10;



console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = true,
    isClosed = false;

    console.log(isChecked && isClosed);