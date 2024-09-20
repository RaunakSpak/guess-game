// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const result = document.getElementById('result');
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (userGuess === randomNumber) {
        result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        guessInput.disabled = true;
    } else {
        const difference = Math.abs(userGuess - randomNumber);
        let hint = '';

        if (difference <= 5) {
            hint = "You're very close! ";
        } else if (difference <= 10) {
            hint = "You're getting warm! ";
        }

        if (userGuess < randomNumber) {
            result.textContent = hint + 'Too low. Try again.';
        } else {
            result.textContent = hint + 'Too high. Try again.';
        }
    }

    guessInput.value = '';
    guessInput.focus();
}
