let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){

  score = scoreStr ? JSON.parse(scoreStr) :{
    win: 0,
    tie: 0,
    lost: 0,
  };
}


score.displayScore = function () {
  return ` Win:${score.win}   Lost:${score.lost}    Tie:${score.tie}`
}


function generateComputerChoice() {
  let randomNumber = Math.random() * 3; //This will generate random number between 0 and 3

  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}



function getWinner(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Bat") {
      score.tie++;
      return `it's a draw`;
    } else if (computerMove === "Ball") {
      score.win++;
      return `User Won`;
    } else if (computerMove === "Stump") {
      score.lost++;
      return `Computer Won`;
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return `it's a draw`;
    } else if (computerMove === "Bat") {
      score.lost++;
      return `computer won`;
    } else if (computerMove === "Stump") {
      score.win++;
      return "user won";
    }
  } else {
    if (computerMove === "Ball") {
      score.lost++;
      return `Computer Won`;
    } else if (computerMove === "Bat") {
      score.win++;
      return `User Won`;
    } else if (computerMove === "Stump") {
      score.tie++;
      return `it's a draw`;
    }
  }
}



function displayWinner(userMove, computerMove, winner) {

  localStorage.setItem('score', JSON.stringify(score))
  alert(`     You have choosen ${userMove}. 
     Computer choice is ${computerMove} 
      and  ${winner}

    ${score.displayScore()}`);
}
