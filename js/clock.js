function getTime() {
  let time = new Date();
  let hour = time.getHours();
  let session = "AM";
  if (hour > 12) {
    session = "PM";
    hour -= 12;
  }
  if (hour < 10) hour = "0" + hour;

  let min = time.getMinutes();
  if (min < 10) min = "0" + min;

  let second = time.getSeconds();
  if (second < 10) second = "0" + second;

  let ms = time.getMilliseconds();
  if (ms < 100) ms = "00" + ms;

  document.getElementById("hour").innerHTML = hour + ":";
  document.getElementById("min").innerHTML = min + ":";
  document.getElementById("second").innerHTML = second + ":";
  document.getElementById("session").innerHTML = session;
}
setInterval(getTime, 1000);
