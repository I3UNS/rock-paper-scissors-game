const playerOptions = document.getElementById("player-options");
playerOptions.addEventListener("click", computeGame);

const computerOptions = document.getElementById("computer-options");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

const computerOptionsArr = ["Rock", "Paper", "Scissors"];

let scorePlayer = 0;
let scoreComputer = 0;

function computeGame(){
    
    choiceRoll();
    
    if (scorePlayer == 5) {
        document.getElementById("player").innerText = "Player Wins!";
    } else if (scoreComputer == 5) {
        document.getElementById("computer").innerText = "Computer Wins!";
    }
}

function choiceRoll(){

    // Computer Choice Randomizer

    // index will always between 0-2
    let index = Math.floor(Math.random() * 3); 
    let computerSelection = computerOptionsArr[index];
    // console.log(computerOptionsArr[index])   

    //Game Logic

    //Win Condition for Rock
    if (playerOptions.innerText.includes("Rock") && computerSelection == "Scissors"){

        playerScore.innerText = `Player Score: ${scorePlayer = scorePlayer + 1}`;

        console.log("Player: " + playerOptions.innerText);
        console.log("Computer: " + computerSelection);

    } 
    
    //Draw Condition for Rock
    if (playerOptions.innerText.includes("Rock") && computerSelection == "Rock"){
        console.log("DRAW");
    }

    //Lose Condition for Rock
    if (playerOptions.innerText.includes("Rock") && computerSelection == "Paper"){
        computerScore.innerText = `Computer Score: ${scoreComputer = scoreComputer + 1}`;

        console.log("Player: " + playerOptions.innerText);
        console.log("Computer: " + computerSelection);
    }


    //Win Condition for Paper
    if (playerOptions.innerText.includes("Paper") && computerSelection == "Rock"){

        playerScore.innerText = `Player Score: ${scorePlayer = scorePlayer + 1}`;

        console.log("Player: " + playerOptions.innerText);
        console.log("Computer: " + computerSelection);

    } 
    
    //Draw Condition for Paper
    if (playerOptions.innerText.includes("Paper") && computerSelection == "Paper"){
        console.log("DRAW");
    }

    //Lose Condition for Paper
    if (playerOptions.innerText.includes("Paper") && computerSelection == "Scissors"){
        computerScore.innerText = `Computer Score: ${scoreComputer = scoreComputer + 1}`;

        console.log("Player: " + playerOptions.innerText);
        console.log("Computer: " + computerSelection);
    }
    
    //Win Condition for Scissors
    if (playerOptions.innerText.includes("Scissors") && computerSelection == "Paper"){

        playerScore.innerText = `Player Score: ${scorePlayer = scorePlayer + 1}`;

        console.log("Player: " + playerOptions.innerText);
        console.log("Computer: " + computerSelection);

    } 
    
    //Draw Condition for Scissors
    if (playerOptions.innerText.includes("Scissors") && computerSelection == "Scissors"){
        console.log("DRAW");
    }

    //Lose Condition for Scissors
    if (playerOptions.innerText.includes("Scissors") && computerSelection == "Rock"){
        computerScore.innerText = `Computer Score: ${scoreComputer = scoreComputer + 1}`;

        console.log("Player: " + playerOptions.innerText);
        console.log("Computer: " + computerSelection);
    }
    
}
