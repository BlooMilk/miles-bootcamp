function playGame() {
  let computerThrowChoice;
  let userWinCount = 0;
  let computerWinCount = 0;
  let tieCount = 0;

  function randomComputerChoice() {
    computerThrowChoice = Math.floor(Math.random() * 3) + 1;
  } //1=rock, 2=paper, 3=scissors

  function userThrowsRock() {
    if (computerThrowChoice === 1) {
      tieCount++;
      console.log("The player threw Rock and the computer threw Rock");
      console.log("Result: Tie");
    } else if (computerThrowChoice === 2) {
      computerWinCount++;
      console.log("The player threw Rock and the computer threw Paper");
      console.log("Result: Computer wins :(");
    } else if (computerThrowChoice === 3) {
      userWinCount++;
      console.log("The player threw Rock and the computer threw Scissors");
      console.log("Result: Player wins!");
    }
  }

  function userThrowsPaper() {
    if (computerThrowChoice === 1) {
      userWinCount++;
      console.log("The player threw Paper and the computer threw Rock");
      console.log("Result: Player wins!");
    } else if (computerThrowChoice === 2) {
      tieCount++;
      console.log("The player threw Paper and the computer threw Paper");
      console.log("Result: Tie");
    } else if (computerThrowChoice === 3) {
      computerWinCount++;
      console.log("The player threw Paper and the computer threw Scissors");
      console.log("Result: Computer wins :(");
    }
  }

  function userThrowsScissor() {
    if (computerThrowChoice === 1) {
      computerWinCount++;
      console.log("The player threw Scissors and the computer threw Rock");
      console.log("Result: Computer wins :(");
    } else if (computerThrowChoice === 2) {
      userWinCount++;
      console.log("The player threw Scissors and the computer threw Paper");
      console.log("Result: Player wins!");
    } else if (computerThrowChoice === 3) {
      tieCount++;
      console.log("The player threw Scissors and the computer threw Scissors");
      console.log("Result: Tie");
    }
  }

  function getNumberOfRounds() {
    let userRounds = parseInt(
      prompt(
        "How many rounds would you like to play? (Choose a number from 1 to 5)",
        1
      )
    );
    if (userRounds > 0 && userRounds < 6) {
      for (let currentRound = 1; currentRound <= userRounds; currentRound++) {
        console.log("Round:", currentRound);
        console.log(
          `Score: ${userWinCount} player wins, ${computerWinCount} computer wins, ${tieCount} ties`
        );
        randomComputerChoice();
        function getUserThrowChoice() {
          let userThrowChoice = prompt("Choose 'rock', 'paper', or 'scissors'");
          if (userThrowChoice.toLowerCase() === "rock") {
            userThrowsRock();
          } else if (userThrowChoice.toLowerCase() === "paper") {
            userThrowsPaper();
          } else if (userThrowChoice.toLowerCase() === "scissors") {
            userThrowsScissor();
          } else {
            console.log("That was not a valid choice, please try again.");
            getUserThrowChoice();
          }
        }
        getUserThrowChoice();
      }
    } else {
      console.log("You did not enter a valid number, please try again.");
      getNumberOfRounds();
    }
  }

  getNumberOfRounds();
  console.log(
    `The final score is: ${userWinCount} player wins, ${computerWinCount} computer wins, ${tieCount} ties`
  );
  if (userWinCount > computerWinCount) {
    console.log("The player wins! Great job :)");
  } else if (userWinCount < computerWinCount) {
    console.log("The computer wins! Better luck next time :(");
  } else {
    console.log("Its a tie!");
  }
}