const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

console.log(today);

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday",];

const months = ["Jaunray","february","March","April","May","june","July","August","September","October","November","December"];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekdays[ today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();