let box = document.getElementById('box'),//псевдомассивы
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),//имеет только 1 метод — ForEach
    oneHeart = document.querySelector('.heart'),//первое сердечко
    circle2 = document.querySelector('.circle'),
    heart2 = document.getElementsByClassName('heart'),
    wrapper = document.querySelector('.wrapper');

/*console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);//конкретный элемент
console.log(heart);
console.log(oneHeart);*/
box.style.backgroundColor = 'blue';
circle[0].style.backgroundColor = "green";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "red";
btn[1].style.borderRadius = '100%';

/*for (let i = 0; i < 6; i++) {
    heart2[i].style.backgroundColor = 'blue';
}*/
/*
console.log(heart.length);

heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'blue';
});*/

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

//document.body.appendChild(div);
//wrapper.appendChild(div);

//div.innerHTML = 'Hello World!';
div.textContent = "Hello World!";
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
//document.body.replaceChild(btn[1], circle[1]);
console.log(div);