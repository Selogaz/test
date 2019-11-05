let box = document.getElementById('box'),//псевдомассивы
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'),
    oneHeart = document.querySelector('.heart');//первое сердечко

console.log(box);
console.log(btn);
console.log(btn(0));
console.log(circle(2));//конкретный элемент
console.log(heart);
console.log(oneHeart);