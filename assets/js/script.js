// DOM variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rpsOptions = ['Rock', 'Paper', 'Scissors'];
const result = document.getElementById("result");
let userScore = 0;
let computerScore = 0;


// let computer select random choice 
function createComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    return rpsOptions[randomChoice];
}

// run game function
function game(userChoice) {
    let computerChoice = createComputerChoice();
    displayResult(userChoice, computerChoice);
}

// update result and set score variables 
const updateScore = () => { 
    const userScoreDisplay = document.getElementById("user-score");
    userScoreDisplay.innerHTML = userScore;
    const computerScoreDisplay = document.getElementById("computer-score");
    computerScoreDisplay.innerHTML = computerScore;
};

// display result 
function displayResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result.innerHTML = "It's a draw";
        userScore++;
        computerScore++;
        updateScore();
    } else if (userChoice === "Rock" && computerChoice === "Scissors") {
        result.innerHTML = "Rock beats Scissors, You're a winner!";
        userScore++;
        updateScore();
    } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        result.innerHTML = "Scissors beats Rock, You're a winner!";
        userScore++;
        updateScore();
    } else if (userChoice === "Paper" && computerChoice === "Rock") {
        result.innerHTML = "Paper beats Rock, You're a winner!";
        userScore++;
        updateScore();
    } else if (userChoice == "Paper" && computerChoice === "Scissors") {
        result.innerHTML = "Scissors beats Rock, You're a loser!";
        computerScore++;
        updateScore();
    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        result.innerHTML = "Rock beats Scissors, You're a loser!";
        computerScore++;
        updateScore();
    } else {
        result.innerHTML = "Paper beats Rock, You're a loser!";
        computerScore++;
        updateScore();
    }
}

// event listeners for each button 
rock.addEventListener("click", function () {
    game("Rock");
});
paper.addEventListener("click", function () {
    game("Paper");
});
scissors.addEventListener("click", function () {
    game("Scissors");
});


