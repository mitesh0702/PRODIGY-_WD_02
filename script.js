let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  const ms = time % 1000;

  const formattedHrs = hrs.toString().padStart(2, "0");
  const formattedMins = mins.toString().padStart(2, "0");
  const formattedSecs = secs.toString().padStart(2, "0");
  const formattedMs = ms.toString().padStart(3, "0");

  return `${formattedHrs}:${formattedMins}:${formattedSecs}.${formattedMs}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").textContent = timeToString(elapsedTime);
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00.000";
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
