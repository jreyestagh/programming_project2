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

    startBtn.disabled = true;
    timeInput.disabled = true;

    let remainingTime = seconds;
    const countdownTimer = setInterval(() => {
        if (remainingTime > 0) {
            console.log(`Time remaining: ${remainingTime} seconds`);
            remainingTime--;
        } else {
            clearInterval(countdownTimer);
            alert("Your time is up!!!!");
            startBtn.disabled = false;
            timeInput.disabled = false;
            timeInput.value = "";
        }
    }, 1000);
}
