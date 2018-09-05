/* Rock Paper Scissors simulator */

//user's selection 
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    //console.log('correct');
    return userInput;
  }
  else {
    console.log('Must select either rock, paper, or scissors');
  }
};

//computer's selection 
function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random()*3)];
}


//let userChoice = getUserChoice('ROCK');
//getUserChoice('shoe'); 
//let computerChoice = getComputerChoice();
//console.log(computerChoice);

//determine if user or computer wins
function determineWinner(userChoice, computerChoice) {
  if(userChoice === 'bomb') {
    return 'Game won by user'
  }
  else if(userChoice === computerChoice) {
    return 'Game is a tie.'
  }
  else if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Game won by computer.'
    }
    else {
      return 'Game won by user.'
    }
  } 
  else if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Game won by computer.'
    }
    else {
      return 'Game won by user.'
    }
  }
  else {
    if(computerChoice === 'rock') {
      return 'Game won by computer.'
    }
    else {
      return 'Game won by user.'
    }
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb');
  console.log(`User's choice: ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer's choice: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();


