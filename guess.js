document.addEventListener("DOMContentLoaded", function () {
    const min = 1;
    const max = 100;
    const targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 0;

    const guessInput = document.getElementById("guess");
    const checkButton = document.getElementById("check");
    const message = document.getElementById("message");
    const resetButton = document.getElementById("reset");

    checkButton.addEventListener("click", function () {
        const guess = parseInt(guessInput.value);
        attempts++;

        if (guess < min || guess > max || isNaN(guess)) {
            message.innerText = "Enter a valid number between 1 and 100.";
        } else if (guess === targetNumber) {
            message.innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;
            checkButton.disabled = true;
        } else if (guess < targetNumber) {
            message.innerText = "Try a higher number.";
        } else {
            message.innerText = "Try a lower number.";
        }
    });

    resetButton.addEventListener("click", function () {
        attempts = 0;
        targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        message.innerText = "";
        guessInput.value = "";
        checkButton.disabled = false;
    });
});
