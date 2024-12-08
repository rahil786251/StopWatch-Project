var seconds = 0;
var minutes = 0;
var Interval;

function buttonStart() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
}

function buttonStop() {
  clearInterval(Interval);
}

function startTimer() {
  seconds++;
  document.getElementById("seconds").innerHTML = seconds;
  
  if (seconds > 59) {
    seconds = 0;
    minutes++;
    document.getElementById("minutes").innerHTML = minutes;
  }
}
