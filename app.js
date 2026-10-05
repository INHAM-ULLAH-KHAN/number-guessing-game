
/*
 * NUMBER GUESSING GAME
 *
 * Requirements:
 * 1. Generate a random number between 1 and 100.
 * 2. Ask the player to enter a guess.
 * 3. Tell the player whether their guess is too high, too low, or correct.
 * 4. Count the number of valid attempts.
 * 5. When the player guesses correctly, display the number of attempts.
 * 6. Ask the player whether they want to play again.
 */

// Generate a random number between 1 and 100.

// Example of generating a random number within a custom range:
// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

const readline = require('readline');

console.log("=== NUMBER GUESSING GAME ===");

const secretNumber = Math.floor(Math.random() * 100) + 1;

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let attempts = 0;

function askForGuess() {

    // Ask the player to enter their guess.
    r1.question("Enter your guess (1-100): ", (guess) => {

        // Convert the player's input from a string to a number.
        guess = Number(guess);

        // Validate the player's input.
        if (
            Number.isNaN(guess) ||
            !Number.isInteger(guess) ||
            guess <= 0 ||
            guess > 100
        ) {
            console.log("Invalid input. Please enter a whole number between 1 and 100.");
            askForGuess();
            return;
        }

        // Count only valid guesses as attempts.
        attempts++;

        // Check the player's guess against the secret number.
        checkGuess(guess);
    });
}

function checkGuess(guess) {

    if (guess === secretNumber) {
        console.log("🎉 Correct! You guessed the secret number!");
        r1.close();
    }
    else {

        if (guess < secretNumber) {
            console.log("Too low! Try a higher number.");
        }
        else {
            console.log("Too high! Try a lower number.");
        }

        // End the game after 10 unsuccessful attempts.
        if (attempts >= 10) {
            console.log("Game over! You've used all 10 attempts.");
            r1.close();
            return;
        }
        else {
            // Ask the player for another guess.
            askForGuess();
        }
    }
}

askForGuess();
