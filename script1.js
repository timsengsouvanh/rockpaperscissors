//computer selection

function computerPlay()
{
return choice[Math.floor(Math.random()*choice.length)];   
}

const choice = ['rock', 'paper', 'scissors'];

//setting the computerSelection as the result of function


// console.log(computerSelection)

//player selection


// function playerPlay(){
//     const userInput = prompt('rock, paper or scissors?')
//     return userInput.toLowerCase()
// }
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const notification = document.createElement('div');


function youwin(){

notification.classList.add('notification')
notification.textContent = 'You Win';
scorearea.appendChild(notification)}

rock.addEventListener('click', () => {
      playerSelection = 'rock'
      notification.remove()
      playRound()
    })
paper.addEventListener('click', () => {
      playerSelection = 'paper'
      playRound()
    })
scissors.addEventListener('click', () => {
      playerSelection = 'scissors'
      playRound()
    })

//notification dom
const scorearea = document.querySelector('#scorearea')





//setting the playerSelection as the result of function
// const playerSelection = playerPlay()

// console.log(playerSelection)

//rules for the game
function playRound() {
    const computerSelection = computerPlay()
    console.log(computerSelection)
  
    // const playerSelection = playerPlay()
    // console.log(playerSelection)

    if (playerSelection === 'rock' && computerSelection === 'rock'){
    return youwin()
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

