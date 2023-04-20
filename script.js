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
            return "It's a TIE! Play again";
            break;
        case "rock":
            if (computer == "scissors") {
                return "You WIN! Rock beats Scissors";
            } 
            if (computer == "paper") {
                return "You LOSE! Paper beats Rock";
            }
            break;
        case "paper":
            if (computer == "rock") {
                return "You WIN! Paper beats Rock";
            } 
            if (computer == "scissors") {
                return "You LOSE! Scissors beats Paper";
            }
            break;
        case "scissors":
            if (computer == "paper") {
                return "You WIN! Scissors beats Paper";
            } 
            if (computer == "rock") {
                return "You LOSE! Rock beats Scissors";
            }
            break;
    }
   

}

/*getComputerChoice();*/
