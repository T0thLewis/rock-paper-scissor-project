const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

playGame();

//Function to run the game for 5 rounds
function playGame() {

    for (let i = 0; i < 5; i++) {

        const playerChoice = checkPlayerChoice();
        const computerChoice = getComputerChoice();

        console.log(playRound(playerChoice, computerChoice, choices));
        console.log(`Player = ${playerScore} | Computer = ${computerScore}`);

    }

    announceResults(playerScore, computerScore);

}

//Determines final outcome and announces the result
function announceResults(playerScore, computerScore) {

    if (playerScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (computerScore > playerScore) {
        console.log("The Computer wins!");
    } else {
        console.log("It's a tie!");
    }

}

//Recursive function to make player input case-insensitive and check if input is correct
function checkPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    for (const x of choices) {
        if (x === playerChoice) {
            return playerChoice;
        }
    }

    alert("Invalid choice, please input valid choice!");
    return checkPlayerChoice();

}

//Generates computer choice for the game
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//The game rule to determine outcome and add a point to the winner
function playRound(playerChoice, computerChoice, choices) {
    const gameRules = ["Paper beats Rock. ", "Rock beats Scissors. ", "Scissors beat paper. "];
    const winner = ["Computer wins!", "Player wins!"];
    let condition;

    if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return condition = gameRules[0].concat(winner[0]);
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        playerScore++;
        return condition = gameRules[0].concat(winner[1]);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return condition = gameRules[1].concat(winner[0]);
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        return condition = gameRules[1].concat(winner[1]);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return condition = gameRules[2].concat(winner[0]);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        return condition = gameRules[2].concat(winner[1]);
    } else {
        return condition = "You both chose the same!";
    }
}