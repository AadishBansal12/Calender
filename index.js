const dt=new Date();
dt.setDate(1);
var day=dt.getDay();
// console.log(dt.getDay());

// console.log(month[dt.getMonth()]);
var endDate=new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
).getDate();
var prevDate=new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
).getDate();

var today=new Date().getDate();
console.log(today);

const month=["January","February","March","April","May","June","July","August","September","October","November","December"]


document.getElementById("date-str").innerHTML= dt.toDateString();
document.getElementById("month").innerHTML=month[dt.getMonth()];
var cells= "";
for(x=day;x>0;x--)
{
    cells+="<div class='prev-date'>" + (prevDate - x+1) + "</div>";
}
for(i=1;i<=endDate; i++)
{
    cells+="<div>"+ i +"</div>";
}
document.getElementsByClassName("days")[0].innerHTML=cells;