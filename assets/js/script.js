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




