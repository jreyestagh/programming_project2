const timeInput = document.getElementById("timeInput");
const startBtn = document.getElementById("startBtn");
const pendingList = document.getElementById("pending").querySelector("ul");
const completedList = document.getElementById("completed").querySelector("ul");

startBtn.addEventListener("click", startCountdown);

function startCountdown() {
    const seconds = parseInt(timeInput.value);

    if (isNaN(seconds) || seconds < 1 || seconds > 60) {
        alert("Please enter a time ranging between 1 and 60 seconds.");
        return;
    }
    
}
