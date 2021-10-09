

function showTime() {

let date = new Date();
let myDay = date.getUTCDay()
let myHours = date.getHours();
let myMins = date.getMinutes();
let mySecs = date.getSeconds();
let myDigitalClock = document.getElementById("digitalclock");
myDigitalClock.style.fontSize = "32px";

let session = "AM";

let myActualDay = "";
switch (myDay) {
    case 1:
        myActualDay = 'monday'
        break;
    case 2:
        myActualDay = 'Tuesday'
        break;
    case 3:
        myActualDay = 'Wednesday'
        break;
    case 4:
        myActualDay = 'Thursday'
        break;
    case 5:
        myActualDay = 'Friday'
        break;
    case 6:
      myActualDay = 'Saturday'
      break;
    case 7:
        myActualDay = 'Sunday'
        break;
    default:
        break;
}
if (myHours > 12) {
    myHours = myHours-12;
    session = "PM"
}
// if (myHours < 10) {
//     myHours = "0"+ myHours
// }
// if (myMins < 10) {
//     myMins = "0"+ myMins
// }
// if (mySecs < 10) {
//     mySecs = "0"+ mySecs
// }

myHours = (myHours < 10)? "0"+myHours: myHours;
myMins = (myMins < 10 )? "0"+ myMins: myMins;
mySecs = (mySecs < 10 )? "0"+ mySecs: mySecs;

     myDigitalClock.innerHTML = myActualDay + " " + myHours + " : " + myMins + " : " + mySecs + " " + session;
     setTimeout(showTime, 1000)
}
showTime();
