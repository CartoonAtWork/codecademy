const getUserChoice = userInput => {
  //Since a user can pass a parameter, with different capitalizations
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("Error, make sure that you typed a valid choice.")
  }
};
console.log (getUserChoice('Tock'));

//Get the computer choice.
const getComputerChoice = pcInput => {
  pcInput = Math.floor(Math.random()*3);
  switch(pcInput) {
    case 0 : return 'rock';
    break;
    case 1 : return 'paper';
    break; 
    case 2 : return 'scissors';
    break;
    default : return undefined;
    break; 
  }; 
};
console.log(getComputerChoice());

//Compare the two choices and determine a winner.

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      //return 'The computer won!';
    } 
    else {
    return 'The user won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
    return 'The computer won!';
    } else {
      return 'The user won!';
    }   
  } 
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
    return 'The computer won!';
    } else {
      return 'The user won!';
    }
  } 
  if (userChoice === 'bomb') {
    if (computerChoice === 'rock' || computerChoice === 'scissors'|| computerChoice === 'paper') {
    return 'The user won!';
    }
  }
};

const playGame = () => {
 const userChoice = getUserChoice('Bomb'); 
 const computerChoice = getComputerChoice();
 console.log(`Your turn: ${userChoice}`); 
 console.log(`Computer turn: ${computerChoice}`);
 console.log (determineWinner(userChoice, computerChoice));
};

playGame();





  
  
  
  


