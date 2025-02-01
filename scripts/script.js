const container = document.querySelector(".container");
const choicesDiv = document.querySelector(".choices");
const playGameButton = document.querySelector("#playGame");
const intro = document.querySelector(".intro");
const scores = document.querySelector(".scores");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const winnerDisplay = document.createElement("p");


winnerDisplay.style.backgroundColor = "green";
winnerDisplay.style.padding = "10px";
winnerDisplay.style.color = "white";
winnerDisplay.style.margin = "0 auto";

//initializing the human score and the computer score
let humanScore = 0;
let computerScore = 0;

humanScoreDisplay.textContent = 0;
computerScoreDisplay.textContent = 0;


const buttons = document.querySelectorAll(".btn");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.style.display = "none";
paper.style.display = "none";
scissors.style.display = "none";
scores.style.display = "none";


playGameButton.addEventListener("click", () => {
    rock.style.display = "inline";
    paper.style.display = "inline";
    scissors.style.display = "inline";
    scores.style.display = "inline";
    intro.style.display = "none";
    playGameButton.style.display = "none";
})
buttons.forEach ((button) => {
    button.addEventListener("click", () => {
        if (winnerDisplay) {
            winnerDisplay.remove();
        }
        const userChoice = getHumanChoice(button.textContent.toLowerCase());
        playRound(userChoice, getComputerChoice());
    })
});



const computerChoicePara = document.createElement("p");
function getComputerChoice () {
    
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);

    computerChoicePara.textContent = "Computer choice is " + choices[randomNumber];
    choicesDiv.appendChild(computerChoicePara);
    return choices[randomNumber];

}

const humanChoicePara = document.createElement("p");
function getHumanChoice (choice) {
    
    
    humanChoicePara.textContent = "Human choice is " + choice;

    choicesDiv.appendChild(humanChoicePara);
    return () => choice;

    
}

computerChoicePara.style.padding = "10px";
humanChoicePara.style.padding = "10px"
computerChoicePara.style.color = "white";
humanChoicePara.style.color = "white";

// if (humanScore === 5) {
//     alert("The Human is the winner");
// }
// else if (computerScore === 5) {
//     alert("The Computer is the winner");
// }

function playGame () {

    // for (let index = 0; index < 5; index++) {
    // playRound(getHumanChoice(), getComputerChoice());}

    // rock.addEventListener("click", () => playRound(getHumanChoice(), getComputerChoice()));
    // paper.addEventListener("click", () => playRound(getHumanChoice(), getComputerChoice()));
    // scissors.addEventListener("click", () => playRound(getHumanChoice(), getComputerChoice()));
        
    // }

    //console.log("The Human Score is " + humanScore + ". The Computer Score is " + computerScore);


}

function playRound(humanChoice, computerChoice) {

    //console.log("human choice: " + humanChoice());
    
    if (humanChoice() === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        humanChoicePara.style.backgroundColor = "green";
        computerChoicePara.style.backgroundColor = "red";
    }

    else if (humanChoice() === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        humanChoicePara.style.backgroundColor = "green";
        computerChoicePara.style.backgroundColor = "red";
    }

    else if (humanChoice() === "paper" && computerChoice === "rock") {
        humanScore += 1;
        humanChoicePara.style.backgroundColor = "green";
        computerChoicePara.style.backgroundColor = "red";
    }

    else if (computerChoice === "rock" && humanChoice() === "scissors") {
        computerScore += 1;
        computerChoicePara.style.backgroundColor = "green";
        humanChoicePara.style.backgroundColor = "red";
    }

    else if (computerChoice === "scissors" && humanChoice() === "paper") {
        computerScore += 1;
        computerChoicePara.style.backgroundColor = "green";
        humanChoicePara.style.backgroundColor = "red";
    }

    else if (computerChoice === "paper" && humanChoice() === "rock") {
        computerScore += 1;
        computerChoicePara.style.backgroundColor = "green";
        humanChoicePara.style.backgroundColor = "red";
    }

    else if (computerChoice === humanChoice()) {
        computerChoicePara.style.backgroundColor = "grey";
        humanChoicePara.style.backgroundColor = "grey";
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // console.log("Human score is: " + humanScore);
    // console.log("Computer score is: " + computerScore);

    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = 0;
        computerScoreDisplay.textContent = 0;
        // choicesDiv.removeChild(computerChoicePara);
        // choicesDiv.removeChild(humanChoicePara);
        //choicesDiv.remove();
        winnerDisplay.textContent = ("Human is the winner");
        choicesDiv.appendChild(winnerDisplay);

        //alert ("Human is the winner");
    }
    
    else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = 0;
        computerScoreDisplay.textContent = 0;
        // choicesDiv.removeChild(computerChoicePara);
        // choicesDiv.removeChild(humanChoicePara);
        //choicesDiv.remove();

        winnerDisplay.textContent = ("Computer is the winner");
        choicesDiv.appendChild(winnerDisplay);

        //alert("Computer is the winner");
    }


}
