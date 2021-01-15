//computer selection

function computerPlay()
{
return choice[Math.floor(Math.random()*choice.length)];   
}

const choice = ['rock', 'paper', 'scissors'];

//setting the computerSelection as the result of function


// console.log(computerSelection)

//player selection

function playerPlay(){
    const userInput = prompt('rock, paper or scissors?')
    return userInput.toLowerCase()
}
//setting the playerSelection as the result of function
// const playerSelection = playerPlay()

// console.log(playerSelection)

//rules for the game
function playRound() {
    const computerSelection = computerPlay()
    console.log(computerSelection)
    const playerSelection = playerPlay()
    console.log(playerSelection)

    if (playerSelection === 'rock' && computerSelection === 'rock'){
    return alert('draw')
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return alert('you win')
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
       return alert('you lose')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
      return alert('you lose')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
       return alert('you win')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
       return alert('you draw')
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
      return alert('you lose')
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
      return alert('you win')
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper'){
      return alert('you draw')
    }  
}

function game(){
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}

game()
