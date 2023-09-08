// Targeting all the data-testid elements
const info = document.querySelectorAll('[data-testid]');

const date = new Date();
const dayNumber = date.getDay();
let theDayIs;
const UTCTime = date.getMilliseconds();

switch(dayNumber){
    case 0:
        theDayIs = 'Sunday';
        break;
    case 1:
        theDayIs = 'Monday';
        break;
    case 2:
        theDayIs = 'Tuesday';
        break;
    case 3:
        theDayIs = 'Wednesday';
        break;
    case 4:
        theDayIs = 'Thursday';
        break;
    case 5:
        theDayIs = 'Friday';
        break;
    case 6:
        theDayIs = 'Saturday';
       break;
}


info.forEach(item => {
    if (item.dataset.testid === 'currentDayOfTheWeek'){
        item.innerHTML = `${theDayIs}`;
    } 
    if (item.dataset.testid === 'currentUTCTime') {
        item.innerHTML = `<span>UTCTime:</span> ${Date.now()}`
    };
});
