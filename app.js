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
  
r1.question("What do you Guess? ", (guess) =>{
   guess = Number(guess)
   
   while (true) {
      
   console.log(` I Guess ${guess}`);
   if (guess < secretNumber) {
      console.log("Too Low");
   }
   else if (guess > secretNumber) {
      console.log("Too High");
      
   }
   else{
      console.log("Correct! You GUessed it!");
            
   }}
   r1.close();
   
})

