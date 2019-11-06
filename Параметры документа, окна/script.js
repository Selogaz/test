let box = document.querySelector('.box'),
    btn = document.querySelector('button');

/*let width = box.clientWidth,
    height = box.clientHeight;*///без padding и скрола
    /*let width = box.offsetWidth,//совпадают с указнными в css
    height = box.offsetHeight;*/
    // let width = box.scrollWidth,//весь текст без полосы прокрутки
    // height = box.scrollHeight;
    let width = box.clientWidth,
        height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);//получение координат

console.log(document.documentElement.clientWidth);//ширина документа
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);//Сколько пикселей прокручено от начала

btn.addEventListener('click', function() {
    box.style.height = box.scrollHeight + 'px';//только для чтения
    //Менять можно только scrollTop || scrollLeft
    box.scrollTop = 0;//При клике перемещает наверх
    console.log(box.scrollTop);
    //document.documentElement.scrollTop = 0;//Отмотка страницы наверх при введении в консоль
});

scrollBy(0, 200);
scrollTo(0, 200);