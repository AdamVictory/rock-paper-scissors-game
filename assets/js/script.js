// DOM variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("rock");
const rpsOptions = ['Rock', 'Paper', 'Scissors'];
const result = document.getElementById("result");
let userResult = 0; 
let computerResult = 0;


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
const updateResult = () => { 
    const userResultDisplay = document.getElementById("user-result");
    userResultDisplay.innerHTML = userResult;
    const computerResultDisplay = document.getElementById("computer-result");
    computerResultDisplay.innerHTML = userResult;
};

// display result 
function displayResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result.innerHTML = "It's a draw";
        userResult++;
        computerResult++;
        updateResult();
    } else if (userChoice === "Rock" && computerChoice === "Scissors") {
        result.innerHTML = "Rock beats Scissors, You're a winner!";
        userResult++;
        updateResult();
    } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        result.innerHTML = "Scissors beats Rock, You're a winner!";
        userResult++;
        updateResult();
    } else if (userChoice === "Paper" && computerChoice === "Rock") {
        result.innerHTML = "Paper beats Rock, You're a winner!";
        userResult++;
        updateResult();
    } else if (userChoice === "Paper" && computerChoice === "Scissors") {
        result.innerHTML = "Scissors beats Rock, You're a loser!";
        computerResult++;
        updateResult();
    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        result.innerHTML = "Rock beats Scissors, You're a loser!";
        computerResult++;
        updateResult();
    } else {
        result.innerHTML = "Paper beats Rock, You're a loser!";
        computerResult++;
        updateResult();
    }
}





