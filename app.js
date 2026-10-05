/*  Requirements:
1. Generate random number 1–100

2. Ask user for a guess

3. Tell them:
   - Too high
   - Too low
   - Correct

4. Count attempts

5. When correct:
   show number of attempts

6. Ask whether they want to play again
*/

// 1. Generate random number 1–100

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1) + min))
const readline = require('readline');

console.log("NUMBER GUESSING GAME");

const secretNumber = Math.floor(Math.random() * 100) + 1

const r1 = readline.createInterface({
   input:process.stdin,
   output: process.stdout

});
let attempts = 0;

function askForGuess() {

    // ask user
    r1.question("What is your Guess between (1 - 100) ? ", (guess) => {
      console.log(guess);
      console.log(`Number of Atempts is ${attempts + 1} out of 10.`);
      
      // convert input to number
    guess = Number(guess)
    if (guess <= 0 || guess > 100) {
      console.log("Plese enter a valid Number!");
      askForGuess();
      return;
      
    }
    if (!Number.isInteger(guess)) {
      console.log("Please enter a valid Integer");
      askForGuess();
      return;
            
    }

    //Check
    if (Number.isNaN(guess)) {
      console.log("Please enter a valid number!");
      askForGuess();
      return;
      
      
    }
    //Attepmts Check
    attempts++;
    // send number to checkGuess()
    checkGuess(guess)

    })
}

function checkGuess(guess) {
   if (attempts === 10) {
      console.log("Game Over!");
      r1.close();
      return;
   }
   
    if (guess < secretNumber) {
        // Too Low
        console.log(`Your Entered Number ${guess} is Too Low`);
        askForGuess();
    }

    else if (guess > secretNumber) {
        // Too High
        console.log(`Your Entered Number ${guess} is Too High`);
      askForGuess();
    }

    else {
        // Correct
        console.log("You Did It Congrats");
        console.log(`You did it in ${attempts} Attempts`);
        
        r1.close();
        
    }
}

askForGuess();