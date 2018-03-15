//global variables
var playerScore = 0;
var computerScore = 0;
var playerSelection;
var roundCounter = 0;
const computerChoice = document.querySelector('.computerChoice');
const playerScoreShow = document.querySelector('.playerScore');
const computerScoreShow = document.querySelector('.computerScore');
const resetButton = document.querySelector('.reset');
const gameButtons = Array.from(document.querySelectorAll('.game'));
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
//random integer
function getRanInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//make computer choose rock paper scissors
function computerPlay() {
  var compSelect;
  var ranInt = getRanInt(1,3);
  switch (ranInt) {
    case 1:
      compSelect = 'rock';
        break;
    case 2:
      compSelect = 'paper';
        break;
    case 3:
      compSelect = 'scissors';
        break;
  }
  return compSelect;
}
// play one round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock') {
    switch (computerSelection) {
      case 'rock':
        computerChoice.textContent = "I choose rock, too. DRAW!!";
        break;
      case 'paper':
        ++computerScore;
        computerChoice.textContent = "I choose paper. You lose!";
        break;
      case 'scissors':
        ++playerScore;
        computerChoice.textContent = "I choose scissors. You win!";
        break;
    }
  }
  else if (playerSelection == 'paper') {
    switch (computerSelection) {
      case 'rock':
        ++playerScore;
        computerChoice.textContent = "I choose rock. You win";
        break;
      case 'paper':
        computerChoice.textContent = "I choose paper, too. DRAW!";
        break;
      case 'scissors':
        ++computerScore;
        computerChoice.textContent = "I choose scissors. You lose!";
        break;
      }
  }
  else if (playerSelection == 'scissors') {
    switch (computerSelection) {
        case 'rock':
          ++computerScore;
          computerChoice.textContent = "I choose rock. You lose!";
          break;
        case 'paper':
          ++playerScore;
          computerChoice.textContent = "I choose paper. You win";
          break;
        case 'scissors':
          computerChoice.textContent = "I choose scissors, too. DRAW!";
          break;
    }
  }
}
// show the score on h1 element
function showScore() {
  playerScoreShow.textContent = "Player: " + playerScore;
  computerScoreShow.textContent = "Computer: " + computerScore;
}
// executes when it is the 5th round
function annouceWinner() {
  if (roundCounter >= 5) {
    if (playerScore > computerScore) {
      computerChoice.textContent = "You are the winner! by " + playerScore
      + " : " + computerScore;
      toggleButtons();
    }
    else if (computerScore > playerScore) {
      computerChoice.textContent = "You lost by " + computerScore + " : "
      + playerScore;
      toggleButtons();
    }
    else {
      computerChoice.textContent = "DRAW by " + playerScore + " : "
      + computerScore;
      toggleButtons();
    }
  }
  else {
    return;
  }
}
function countRound() {
  roundCounter += 1;
}
// reset everything to 0
function reset() {
  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
  computerChoice.textContent = "";
  playerScoreShow.textContent = "";
  computerScoreShow.textContent = "";
}
// this function will toggle buttons on/off
function toggleButtons() {
  for (var i = 0; i < gameButtons.length; i++) {
    oneButton = gameButtons[i];
    oneButton.classList.toggle('hideButtons');
  }
  resetButton.classList.toggle('hideButtons');
}
// combines all the required functions to play
function play() {
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  showScore();
  countRound();
  annouceWinner();
}
// buttons and their roles
rock.addEventListener('click', function() {
  playerSelection = 'rock';
  play();
})
paper.addEventListener('click', function() {
  playerSelection = 'paper';
  play();
})
scissors.addEventListener('click', function() {
  playerSelection = 'scissors';
  play();
})
// the resetbutton will reset everything to 0 and take back game buttons
resetButton.addEventListener("click", function () {
  reset();
  toggleButtons();
})
