setInterval(() => {
  date = new Date();

  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  hrotate = 30 * hours + minutes / 2;
  mrotate = 6 * minutes;
  srotate = 6 * seconds;

  hour.style.transform = `rotate(${hrotate}deg)`;
  minute.style.transform = `rotate(${mrotate}deg)`;
  second.style.transform = `rotate(${srotate}deg)`;
}, 1000);
