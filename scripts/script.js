const container = document.querySelector(".container");
const choicesDiv = document.querySelector(".choices");
const playGameButton = document.querySelector("#playGame");
const intro = document.querySelector(".intro");
const scores = document.querySelector(".scores");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");

//initializing the human score and the computer score
let humanScore = 0;
let computerScore = 0;


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
        const userChoice = getHumanChoice(button.textContent.toLowerCase());
        playRound(userChoice, getComputerChoice());
    })
});


function getComputerChoice () {
    const computerChoice = document.createElement("p");
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);

    computerChoice.textContent = "Computer choice is " + choices[randomNumber];
    choicesDiv.appendChild(computerChoice);
    return choices[randomNumber];

}

function getHumanChoice (choice) {
    const humanChoice = document.createElement("p");

    humanChoice.textContent = "Human choice is " + choice;

    choicesDiv.appendChild(humanChoice);
    return () => choice;

    
}

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
    }

    else if (humanChoice() === "scissors" && computerChoice === "paper") {
        humanScore += 1;
    }

    else if (humanChoice() === "paper" && computerChoice === "rock") {
        humanScore += 1;
    }

    else if (computerChoice === "rock" && humanChoice() === "scissors") {
        computerScore += 1;
    }

    else if (computerChoice === "scissors" && humanChoice() === "paper") {
        computerScore += 1;
    }

    else if (computerChoice === "paper" && humanChoice() === "rock") {
        computerScore += 1;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // console.log("Human score is: " + humanScore);
    // console.log("Computer score is: " + computerScore);

    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        alert ("Human is the winner");
    }
    
    else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        alert("Computer is the winner");
    }


}
