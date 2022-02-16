let Days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function dayOfWeek() {
    let myDate = new Date();
    TodayDay = myDate.getDay();
    return Days[TodayDay];
}

a = new Date();
let ToDate = a.toLocaleDateString();
let Time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
let Day = dayOfWeek();
document.getElementById("time").className = Time + Day;

