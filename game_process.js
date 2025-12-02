const playerOptions = document.getElementById("player-options");
playerOptions.addEventListener("click", choiceRoll);

const computerOptions = document.getElementById("computer-options");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

const computerOptionsArr = ["Rock", "Paper", "Scissors"];

let rounds = 0;
let scorePlayer = 0;
let scoreComputer = 0;

function choiceRoll(){

    // Computer Choice Randomizer

    // index will always between 0-2
    let index = Math.floor(Math.random() * 3); 
    let computerSelection = computerOptionsArr[index];
    // console.log(computerOptionsArr[index])   
    
    //Game Logic

    if (playerOptions.innerText.includes("Rock") && computerSelection != "Paper"){
        playerScore.innerText = `Player Score: ${scorePlayer++}`;

        console.log("Player: " + playerOptions.innerText);
        console.log("Computer: " + computerSelection);
    }else if (playerOptions.innerText.includes("Rock") && computerSelection === "Rock"){
        console.log("DRAW");
    }
}
