// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// //console.log(JSON.stringify(options));//JSON - формат пердачи данных на сервер
// console.log(JSON.parse(JSON.stringify(options)));//обратная операция


let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open('GET', 'current.json');//настройка
    request.setRequestHeader('Content-type', 'application/json; charse=utf-8');//что именно нужно
    request.send();

    //status в виде кода(открыт/закрыт магазин). В каком состоянии сервер
    //statusText текстовый ответ о состоянии
    //resonseText / response(те товары, которые можно купить) текст ответа сервера
    //readyState

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    })
});