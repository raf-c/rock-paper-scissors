function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random()*3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    switch (player) {
        case computer:
            console.log("TIE");
            return "It's a TIE! Play again";
            break;
        case "rock":
            if (computer == "scissors") {
                console.log("W,RbS");
                return "You WIN! Rock beats Scissors";
            } 
            if (computer == "paper") {
                console.log("L,PbR");
                return "You LOSE! Paper beats Rock";
            }
            break;
        case "paper":
            if (computer == "rock") {
                console.log("W,PbR");
                return "You WIN! Paper beats Rock";
            } 
            if (computer == "scissors") {
                console.log("L,SbP");
                return "You LOSE! Scissors beats Paper";
            }
            break;
        case "scissors":
            if (computer == "paper") {
                console.log("W,SbP");
                return "You WIN! Scissors beats Paper";
            } 
            if (computer == "rock") {
                console.log("L,RbS");
                return "You LOSE! Rock beats Scissors";
            }
            break;
    }
}

function runGame() {
    i = 5
    while (i!=1) {
        ps = prompt("Enter your move");
        cs = getComputerChoice();
        playRound(ps,cs);
        i--;
    }
}
   



//getComputerChoice();
//runGame();
