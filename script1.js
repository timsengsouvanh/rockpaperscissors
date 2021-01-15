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
notification.textContent = 'You Win!';
scorearea.appendChild(notification)}

function youlose(){

notification.classList.add('notification')
notification.textContent = 'You Lose :(';
scorearea.appendChild(notification)}

function youdraw(){

notification.classList.add('notification')
notification.textContent = 'You Draw...';
scorearea.appendChild(notification)}

rock.addEventListener('click', () => {
      playerSelection = 'rock'
      notification.remove()
      playRound()
    })
paper.addEventListener('click', () => {
      playerSelection = 'paper'
      notification.remove()
      playRound()
    })
scissors.addEventListener('click', () => {
      playerSelection = 'scissors'
      notification.remove()
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
    return youdraw()
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return youwin()
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
       return youlose()
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
      return youlose()
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
       return youwin()
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
       return youdraw()
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
      return youlose()
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
      return youwin()
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper'){
      return youdraw()
    }  
}

