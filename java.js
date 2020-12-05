'use strict';

const clock = document.querySelector('.clock');

const currentTime = () => {

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = update(hour);
    minute = update(minute);
    second = update(second);

    clock.textContent = hour + ':' + minute + ':' + second;
    setTimeout(() => {currentTime()} ,1000);

};

const update = (number) => {
    if(number < 10) {return '0' + number }
    else { return number };
};

currentTime ();