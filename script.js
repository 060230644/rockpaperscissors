//global variables used by two functions
var playerScore = 0;
var computerScore = 0;

//random integer
function getRanInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//make computer choose rock paper scissors
function computerPlay()
{
  var compSelect;
  var ranInt = getRanInt(1,3);
  switch (ranInt)
  {
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
//play 1 round of the game
function playRound(playerSelection, computerSelection) {
  var playerSelection = prompt("Enter");
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == 'rock')
  {
    switch (computerPlay())
    {
      case 'rock':
        return "DRAW";
        break;
      case 'paper':
        ++computerScore;
        return "Computer Chooses paper, You lose";
        break;
      case 'scissors':
        ++playerScore;
        return "Computer Chooses scissors, You win!!";
        break;
    }
  }
  else if (playerSelection == 'paper')
  {
    switch (computerPlay())
    {
      case 'rock':
        ++playerScore;
        return "Computer Chooses rock, you win";
        break;
      case 'paper':
        return "Computer Chooses paper, DRAW";
        break;
      case 'scissors':
        ++computerScore;
        return "Computer Chooses scissors, You lose!!";
        break;
      }
  }
  else if (playerSelection == 'scissors')
  {
    switch (computerPlay())
    {
        case 'rock':
          ++computerScore;
          return "Computer Chooses rock, you lose";
          break;
        case 'paper':
          ++playerScore;
          return "Computer Chooses paper, win";
          break;
        case 'scissors':
          return "Computer Chooses scissors, DRAW";
          break;
    }
  }

}
// play 5 rounds of the game continuously
function game()
{
  for (var i = 0; i < 5; i++)
  {
    gameStatus = playRound();
    console.log(gameStatus);
    console.log("Player: " + playerScore + ', ' + "Computer: " + computerScore);
  }
  //declare winner and loser
  if (playerScore > computerScore)
  {
    console.log("You win!!");
  }
  else if (playerScore < computerScore)
  {
    console.log("You lose!!");
  }
  else
  {
    console.log("DRAW");
  }
}
