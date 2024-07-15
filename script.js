'use strict';
/*
console.log(document.querySelector('.message').textContent); // Selecting/Reading the content 

//  ------------------ Selecting and Manipulating the Elements --------------------

document.querySelector('.message').textContent = 'Correct Number!'; // Editing or changing the content      

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 18; // to add the value/number 
console.log(document.querySelector('.guess').value);  // to get that value
*/
// ----------------- Handling Click Events -------------------

// Here we first select the query or event and then add event to it or functionality to it

let secretNumber = Math.trunc(Math.random()*20)+1;

let totalScore = 20;

let highScore = 0;

// TO reset if player select AGAIN
document.querySelector('.again').addEventListener('click',function() {
      totalScore = 20;
      secretNumber = Math.trunc(Math.random()*20)+1;
      document.querySelector('.guess').value = '';
      document.querySelector('.score').textContent = totalScore;
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.number').textContent = '?';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
});

// To manage the check event 
document.querySelector('.check').addEventListener('click',function() {
     const guess = Number(document.querySelector('.guess').value);
     //console.log(guess, typeof guess);

     // When there is no guess or no input.
     if(!guess) {
           document.querySelector('.message').textContent = '🚫 No Number!';
     }
     // When Player Wins the game.
     else if(guess === secretNumber) {
           document.querySelector('.message').textContent = '🎊 Correct Number!You Won';
           document.querySelector('.number').textContent = secretNumber;
           document.querySelector('body').style.backgroundColor = '#34656d';
           document.querySelector('.number').style.width = '30rem';

           if(totalScore > highScore)
                  document.querySelector('.highscore').textContent = totalScore;
            
     }else if(guess !==secretNumber) {
            if(totalScore > 1) {
                  document.querySelector('.message').textContent = guess > secretNumber ?'📈 Too High':'📉 Too Low';
                  totalScore--;
                  document.querySelector('.score').textContent = totalScore;
            }else {
                  document.querySelector('.message').textContent = '🤖 You lost the Game!';
                  document.querySelector('.score').textContent = 0;
            }
     }
     // when the guess number is greater then the secret number.
//      else if(guess > secretNumber) {
//            if(totalScore > 1) {
//                   document.querySelector('.message').textContent = guess > secretNumber ?'📈 Too High':'📉 Too Low';
//                   totalScore--;
//                   document.querySelector('.score').textContent = totalScore;
//             }else {
//                   document.querySelector('.message').textContent = '🤖 You lost the Game!';
//                   document.querySelector('.score').textContent = 0;
//             }
//      }
//      // when the guess number is greater then the secret number.
//      else if(guess < secretNumber) {
//             if(totalScore > 1) {
//                   document.querySelector('.message').textContent = '📉 Too Low';
//                   totalScore--;
//                   document.querySelector('.score').textContent = totalScore;
//             }else {
//                   document.querySelector('.message').textContent = '🤖 You lost the Game!';
//                   document.querySelector('.score').textContent = 0;
//             }    
//      }
});



