function getTime() {
  let time = new Date();
  let hour = time.getHours();
  let greeting = "Hello";
  if (hour < 6) {
    greeting = "Good night";
  } else if (hour <= 12) {
    greeting = "Good morning";
  } else if (hour <= 18) {
    greeting = "Good afternoon";
  } else if (hour <= 22) {
    greeting = "Good evening";
  } else if (hour <= 24) {
    greeting = "Good night";
  } else {
    greeting = "Hello";
  }
  document.getElementById("greeting").innerHTML = greeting;
}

setInterval(getTime, 1000);
