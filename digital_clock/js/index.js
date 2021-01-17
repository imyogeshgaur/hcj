function updateTime() {
  const hourEL = document.getElementById("hour");
  const minuteEL = document.getElementById("minute");
  const secondEL = document.getElementById("second");
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  if (hours >= 0 && hours <= 9) hours = "0" + hours;
  if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
  if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
  hourEL.innerHTML = hours;
  minuteEL.innerHTML = minutes;
  secondEL.innerHTML = seconds;

  const dateEl = document.querySelector("#date");
  let date = d.getDate();
  if (date >= 0 && date <= 9) date = "0" + date;
  let month = d.getMonth();
  if (month >= 0 && month <= 9) month = "0" + month;
  let year = d.getFullYear();
  if (year >= 0 && year <= 9) year = "0" + year;
  dateEl.innerHTML = `${date}/${month}/${year}`;

  const dayEl = document.querySelector("#day");
  let daynumber = d.getDay();
  let day = "";
  switch (daynumber) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thrusday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  dayEl.innerHTML = day;
}
setInterval(updateTime, 1000);

const container = document.getElementById("container");

document.body.addEventListener("mouseover",(e)=>{
    container.style.border = `10px solid rgb(${e.offsetX},${e.offsetY},${255-e.offsetY})` 
    container.style.boxShadow= `0 0 12px rgba(${e.offsetX},${e.offsetY},${255-e.offsetY}, 0.8), 0 0 12px rgba(${e.offsetX},${e.offsetY},${255-e.offsetY}, 0.8) inset`;
});