alert("connected!")

let userInput = 'scissors'
 userInput = userInput.toLowerCase()

function getComputerChoice(){
 let choice = Math.floor(Math.random() * Math.floor(3));

  switch(choice){
    case 0: 
    return'rock'
    break;
    case 1:
    return'paper'
    break; 
    case 2:
    return'scissors'
   }
}
getComputerChoice()

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'The game is a tie'
  } 
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won this game'
    } else {
      return 'You won this game'
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissor'){
      return 'The computer won this game'
    } else {
      return 'You won this game'
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won this game'
    } else {
      return 'You won this game'
    }
}}
function playGame(){
  let userChoice = userInput
  console.log( `You choose ${userChoice}`)
  let computerChoice = getComputerChoice()
  console.log(`The computer choose ${computerChoice}`)
  console.log(determineWinner(userInput,computerChoice))
}
    
playGame() 