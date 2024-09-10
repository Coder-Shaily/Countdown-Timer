// Get elements from the DOM
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

let countdownInterval;
let totalTime = 0;
let paused = false;

// Function to start the countdown
function startTimer() {
    if (!paused) {
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        totalTime = minutes * 60 + seconds;
    }
    paused = false;

    countdownInterval = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = '00:00';
        } else {
            totalTime--;
            updateDisplay();
        }
    }, 1000);
}

// Function to update the display
function updateDisplay() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to pause the timer
function pauseTimer() {
    paused = true;
    clearInterval(countdownInterval);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(countdownInterval);
    timerDisplay.textContent = '00:00';
    totalTime = 0;
    minutesInput.value = '';
    secondsInput.value = '';
    paused = false;
}

// Event listeners for the buttons
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
