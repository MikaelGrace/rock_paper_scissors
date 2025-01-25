


function getComputerChoice () {

    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);
    console.log("computer choice is " + choices[randomNumber]);
    return choices[randomNumber];

}

//console.log(getComputerChoice());

function getHumanChoice () {
    let userChoice = prompt("Enter your choice from rock, paper, scissors: ").toLowerCase();
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        console.log("Invalid Choice");
    }

    else {
        console.log("human choice is " + userChoice);
        return userChoice;
    }

    
}

//console.log(getHumanChoice());





function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
        }

        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
        }

        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
        }

        else if (computerChoice === "rock" && humanChoice === "scissors") {
            computerScore += 1;
        }

        else if (computerChoice === "scissors" && humanChoice === "paper") {
            computerScore += 1;
        }

        else if (computerChoice === "paper" && humanChoice === "rock") {
            computerScore += 1;
        }

        

    }

    for (let index = 0; index < 5; index++) {
        playRound(getHumanChoice(), getComputerChoice());
        
    }

    console.log("The Human Score is " + humanScore + ". The Computer Score is " + computerScore);

    // if (humanScore > computerScore) {
    //     alert("The Human is the winner");
    // }
    // else if (computerScore > humanScore) {
    //     alert("The Computer is the winner");
    // }
}

playGame();