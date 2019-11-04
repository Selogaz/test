'use strict';

function first() {
    setTimeout( function() {
        console.log(1);
    }, 500 );
}

function second() {
    console.log(2);
}

first();
second();

function LearnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

LearnJS("JavaScript", function() {
    console.log("Я прошел 3 урок!")
})