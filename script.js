const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerChoice = '';

const buttons = document.querySelectorAll('button');

function playGame() {
        const computerChoice = getComputerChoice();

        console.log(playRound(playerChoice, computerChoice, choices));
        console.log(`Player = ${playerScore} | Computer = ${computerScore}`);

    announceResults(playerScore, computerScore);

}

//Determines final outcome and announces the result
function announceResults(playerScore, computerScore) {

    if (playerScore === 5) {
        console.log("Congratulations! You win!");
    } else if (computerScore === 5) {
        console.log("The Computer wins!");
    }
}

//Recursive function to make player input case-insensitive and check if input is correct
function getPlayerChoice() {
    playerChoice = this.classList.value;
}

//Generates computer choice for the game
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//The game rule to determine outcome and add a point to the winner
function playRound(playerChoice, computerChoice) {
    const gameRules = ["Paper beats Rock. ", "Rock beats Scissors. ", "Scissors beat paper. "];
    const winner = ["Computer wins!", "Player wins!"];

    if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return gameRules[0].concat(winner[0]);
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        playerScore++;
        return gameRules[0].concat(winner[1]);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return gameRules[1].concat(winner[0]);
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        return gameRules[1].concat(winner[1]);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return gameRules[2].concat(winner[0]);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        return gameRules[2].concat(winner[1]);
    } else {
        return "You both chose the same!";
    }
}

buttons.forEach( button => {
    button.addEventListener('click', getPlayerChoice);
    button.addEventListener('click', playGame);
});