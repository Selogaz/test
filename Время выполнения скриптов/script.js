/*let timerId = setTimeout(sayHello, 3000);//Настройка задержки перед сообщением
clearTimeout(timerId);//Отмена всплытия модального окна*/

/*let timerId = setInterval(sayHello, 3000);//Повторение через каждые 3с
clearTimeout(timerId);

function sayHello () {
    alert('Hello world!');
}*/

/*let timerId = setTimeout(function log() {
    console.log('Hello');
    setTimeout(log, 2000);
});*/

//brr = document.body.querySelector('div');

/*let brr = document.createElement('div'),
    box = document.createElement('div'),
    brr2 = document.createElement('div');
brr.classList.add('border');
box.classList.add('border-left', 'box');
brr2.classList.add('border');
document.body.appendChild(brr);
document.body.appendChild(box);
document.body.appendChild(brr2);*/
//margin-left: 100px; для box в css

//brr.style.borderBottom();

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.first')) {
        console.log("Hello!");
    }
});    