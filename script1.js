//computer selection

function computerPlay()
{
return choice[Math.floor(Math.random()*choice.length)];   
}

const choice = ['rock', 'paper', 'scissors'];
//////////////////////////////////////////////////////

let playerscore = 0;
let computerscore = 0;

//dom variables

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const notification = document.createElement('div');
const defaultscore = document.createElement('div');
const defaultscore1 = document.createElement('div');
const selectionsarea = document.querySelector('.selectionsarea')

//notification dom
const youwinlose = document.querySelector('.youwinlose')

//outcome functions
function youwin(){

notification.classList.add('notification')
notification.textContent = 'You Win!';
youwinlose.appendChild(notification);
playerscore++;
}

function youlose(){

notification.classList.add('notification')
notification.textContent = 'You Lose :(';
youwinlose.appendChild(notification)
computerscore++;
}

function youdraw(){

notification.classList.add('notification')
notification.textContent = 'You Draw...';
youwinlose.appendChild(notification)}


//rules for the game
function playRound() {
    const computerSelection = computerPlay()
    console.log(computerSelection)

    if (playerSelection === 'rock' && computerSelection === 'rock'){
    return youdraw()
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return youwin();
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

//score dom
const playerscorearea = document.querySelector('#playerscore');
defaultscore.textContent = playerscore
playerscorearea.appendChild(defaultscore)

const cpuscorearea = document.querySelector('#computerscore');
defaultscore1.textContent = computerscore
cpuscorearea.appendChild(defaultscore1)


//UPDATES SCORE
function score() {
  defaultscore.textContent = playerscore
  playerscorearea.appendChild(defaultscore)
  defaultscore1.textContent = computerscore
  cpuscorearea.appendChild(defaultscore1)
}

//AWARDS WINNER AT 5 POINS
function scorecheck() {
  if (playerscore === 5){
    notification.textContent = 'CONGRATULATIONS YOU WIN :)';
    youwinlose.appendChild(notification)
    selectionsarea.remove()
  }
  else if (computerscore === 5){
    notification.textContent = 'YOU LOST :(';
    youwinlose.appendChild(notification)
    selectionsarea.remove()
  }
}


///////////////////////////////////////////////////////////
//starting game
rock.addEventListener('click', () => {
      playerSelection = 'rock'
      notification.remove()
      playRound()
      score()
      scorecheck()
    })
paper.addEventListener('click', () => {
      playerSelection = 'paper'
      notification.remove()
      playRound()
      score()
      scorecheck()
    })
scissors.addEventListener('click', () => {
      playerSelection = 'scissors'
      notification.remove()
      playRound()
      score()
      scorecheck()
    })


/////declare playerscore and cpuscore at 0,
//if player/computer wins add 1 and display it to user.
//check score, if score is 5 declare a winner.




