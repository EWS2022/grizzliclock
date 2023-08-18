const hoursSpan = document.querySelector('.time__numbers_1');
const minutesSpan = document.querySelector('.time__numbers_2');
const secondsSpan = document.querySelector('.time__numbers_3');
const minutesArrow = document.querySelector('.minutes');
const secondsArrow = document.querySelector('.seconds');
const milisecondsArrow = document.querySelector('.miliseconds');
const hoursArrow = document.querySelector('.hours');
const timeNumbers = document.querySelector('.timeNumbers');
const body = document.querySelector('body');
const timeDate = new Date();
const hoursNumber = timeDate.getHours();
const minutesNumber = timeDate.getMinutes();
const secondsNumber = timeDate.getSeconds();
const milisecondsNumber = timeDate.getMilliseconds();
const secondsDegrees = secondsNumber * 6;
const minutesDegrees = minutesNumber * 6 + secondsNumber * 0.1;
const hoursDegrees = hoursNumber * 30 + minutesNumber * 0.5 + secondsNumber * 0.00833333333;
const milisecondsDegrees = milisecondsNumber;
const menuAlarmMinutesButton = document.querySelector('.menu__alarm_minutes');
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu__toggle');
const gear = document.querySelector('.gear');
const alarmButton = document.querySelector('.menu__alarm');
const alarmInput = document.querySelector('.menu__alarm-input');
const alarmArrow = document.querySelector('.alarm-arrow');
const alarmArrowMinutes = document.querySelector('.alarm-minutes-arrow');
const audioAlarm = document.querySelector('#alarm');
const alarmInputMinutes = document.querySelector('.menu__alarm_minutes-input');
audioAlarm.volume = 0.5;
///////////////////////////////////////////////
let alarmHours = 7;
let alarmMinutes = 0;
let alarmDegrees;
gear.classList.add('gear_inactive');
alarmButton.onclick = function () {
    alarmButton.classList.toggle('menu__alarm_active');
    alarmInput.classList.toggle('menu__alarm-input_active');
    alarmArrow.classList.toggle('alarm-arrow_active');
    alarmDegrees = alarmHours * 30 + alarmMinutes * 0.5;
    body.style.setProperty('--alarmDegrees', alarmDegrees + 'deg');
}



menuAlarmMinutesButton.onclick = function () {
    menuAlarmMinutesButton.classList.toggle('menu__alarm_minutes_active');
    alarmInputMinutes.classList.toggle('menu__alarm_minutes-input_active');
    alarmArrowMinutes.classList.toggle('alarm-arrow_minutes_active');
}

alarmInput.onchange = function () {
    alarmHours = parseInt(alarmInput.value[0] + alarmInput.value[1]);
    console.log(alarmHours);
    alarmMinutes = parseInt(alarmInput.value[3] + alarmInput.value[4]);
    console.log(alarmMinutes);
    alarmDegrees = alarmHours * 30 + alarmMinutes * 0.5;
    body.style.setProperty('--alarmDegrees', alarmDegrees + 'deg');
}
menuButton.onclick = function () {
    menu.classList.toggle('menu_active');
    gear.classList.toggle('gear_active');
    gear.classList.toggle('gear_inactive');
}
body.style.setProperty('--secondStartDegrees', secondsDegrees + 'deg');
body.style.setProperty('--secondEndDegrees', secondsDegrees + 360 + 'deg');
body.style.setProperty('--minuteStartDegrees', minutesDegrees + 'deg');
body.style.setProperty('--minuteEndDegrees', minutesDegrees + 360 + 'deg');
body.style.setProperty('--hoursStartDegrees', hoursDegrees + 'deg');
body.style.setProperty('--hoursEndDegrees', hoursDegrees + 360 + 'deg');
body.style.setProperty('--milisecondsStartDegrees', milisecondsDegrees + 'deg');
body.style.setProperty('--milisecondsEndDegrees', milisecondsDegrees + 360 + 'deg');
setInterval(() => {
    let currentTimeDate = new Date();
    let currentHoursNumber = currentTimeDate.getHours();
    let currentMinutesNumber = currentTimeDate.getMinutes();
    let currentSecondsNumber = currentTimeDate.getSeconds();
    let points = document.querySelectorAll('.time__numbers p');

    if (currentHoursNumber == alarmHours && currentMinutesNumber == alarmMinutes && currentSecondsNumber == 0) {
        console.log('alarm');
        audioAlarm.play();
    }

    if (currentSecondsNumber < 10) {
        secondsSpan.innerText = '0' + currentSecondsNumber;
    } else {
        secondsSpan.innerText = currentSecondsNumber;
    }
    if (currentMinutesNumber < 10) {
        minutesSpan.innerText = '0' + currentMinutesNumber;
    } else {
        minutesSpan.innerText = currentMinutesNumber;
    }
    if (currentHoursNumber < 10) {
        hoursSpan.innerText = '0' + currentHoursNumber;
    } else {
        hoursSpan.innerText = currentHoursNumber;
    }
    for (let i = 0; i < points.length; i++) {
        points[i].classList.toggle('hidden')
    }
}, 1000);
