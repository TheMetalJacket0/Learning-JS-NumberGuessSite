let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Gen random number

const generateTarget = () => {return Math.floor(Math.random()*9);}
//Compares distance of guesses
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  let computerDifference = Math.abs(computerGuess,secretTarget);
  let humanDifference = Math.abs(humanGuess,secretTarget);
  if(computerDifference < humanDifference){
    return false;
  } else if(humanDifference < computerDifference || humanDifference === computerDifference){
    return true;
  }
}

const updateScore = winner =>{
  switch(winner){
    case 'human':
    humanScore ++;
    break;
    case 'computer':
    computerScore++;
    break;
  }
}

const advanceRound = () => {
  currentRoundNumber ++;
}

