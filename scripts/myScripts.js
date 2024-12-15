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

    const pendingItem = document.createElement("li");
    pendingItem.innerText = `Timer: ${seconds} seconds`;
    pendingList.appendChild(pendingItem);

    let remainingTime = seconds;
    const countdownTimer = setInterval(() => {
        if (remainingTime > 0) {
            pendingItem.innerText = `Timer: ${remainingTime} Seconds`;
            remainingTime--;
        } else {
            clearInterval(countdownTimer);
            pendingList.removeChild(pendingItem);
            alert("Your time is up!!!!");

            const completedItem = document.createElement("li");
            completedItem.innerText = `${seconds} Seconds - Completed`;
            completedList.appendChild(completedItem);

            startBtn.disabled = false;
            timeInput.disabled = false;
            timeInput.value = "";
        }
    }, 1000);
}
