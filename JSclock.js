
const Days = ["hi", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function dayOfWeek() {
    let myDate = new Date();
    TodayDay = myDate.getDay();
    return Days[TodayDay];
}
setInterval(() => {
    a = new Date();
    let ToDate = a.toLocaleDateString();
    let Time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    let Day = dayOfWeek();
    document.getElementById("time").innerHTML = Time;
    document.getElementById("Date").innerHTML = ToDate;
    document.getElementById("Day").innerHTML = Day;
},1000);
