// Timer
const timerInput = document.getElementById('timer-input');
const timerBtnStart = document.getElementById('timer-btn-start');
const timerBtnStop = document.getElementById('timer-btn-stop');
const timerBtnReset = document.getElementById('timer-btn-reset');
const timerOutput = document.getElementById('timer-output');

let timerIntervalId;
let timerSecondsRemaining;

timerBtnStart.addEventListener('click', () => {
  timerSecondsRemaining = parseInt(timerInput.value);

  if (!isNaN(timerSecondsRemaining) && timerSecondsRemaining > 0) {
    timerBtnStart.disabled = true;
    timerBtnStop.disabled = false;
    timerBtnReset.disabled = false;
    timerInput.disabled = true;
    startTimer();
  } else {
    alert('Please enter a valid positive number.');
  }
});

timerBtnStop.addEventListener('click', () => {
  clearInterval(timerIntervalId);
  timerBtnStart.disabled = false;
  timerBtnStop.disabled = true;
});

timerBtnReset.addEventListener('click', () => {
  clearInterval(timerIntervalId);
  timerBtnStart.disabled = false;
  timerBtnStop.disabled = true;
  timerBtnReset.disabled = true;
  timerInput.disabled = false;
  timerInput.value = '';
  timerOutput.value = '00:00';
});

function startTimer() {
  timerIntervalId = setInterval(() => {
    timerSecondsRemaining--;
    if (timerSecondsRemaining === 0) {
      clearInterval(timerIntervalId);
      timerBtnStart.disabled = false;
      timerBtnStop.disabled = true;
      timerBtnReset.disabled = true;
      timerInput.disabled = false;
    }
    const minutes = Math.floor(timerSecondsRemaining / 60);
    const seconds = timerSecondsRemaining % 60;
    timerOutput.value = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, 1000);

}

// Stopwatch
const stopwatchBtnStart = document.getElementById('stopwatch-btn-start');
const stopwatchBtnStop = document.getElementById('stopwatch-btn-stop');
const stopwatchBtnReset = document.getElementById('stopwatch-btn-reset');
const stopwatchOutput = document.getElementById('stopwatch-output');

let stopwatchIntervalId;
let stopwatchSecondsElapsed = 0;

stopwatchBtnStart.addEventListener('click', () => {
  stopwatchBtnStart.disabled = true;
  stopwatchBtnStop.disabled = false;
  stopwatchBtnReset.disabled = false;
  startStopwatch();
});

stopwatchBtnStop.addEventListener('click', () => {
  clearInterval(stopwatchIntervalId);
  stopwatchBtnStart.disabled = false;
  stopwatchBtnStop.disabled = true;
});

stopwatchBtnReset.addEventListener('click', () => {
  clearInterval(stopwatchIntervalId);
  stopwatchBtnStart.disabled = false;
  stopwatchBtnStop.disabled = true;
  stopwatchBtnReset.disabled = true;
  stopwatchSecondsElapsed = 0;
  stopwatchOutput.value = '00:00:00';
});

function startStopwatch() {
  stopwatchIntervalId = setInterval(() => {
    stopwatchSecondsElapsed++;
    const hours = Math.floor(stopwatchSecondsElapsed / 3600);
    const minutes = Math.floor((stopwatchSecondsElapsed % 3600) / 60);
    const seconds = stopwatchSecondsElapsed % 60;
    stopwatchOutput.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, 1000);
}
