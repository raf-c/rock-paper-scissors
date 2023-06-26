function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random()*3)];
    return choice;
}

const display_result = document.querySelector('#results')
const result = document.createElement('p');
display_result.appendChild(result);


function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    switch (player) {
        case computer:
            result.textContent = 'It\'s a TIE! Play again';
            break;
        case "rock":
            if (computer == "scissors") {
                result.textContent =  'You WIN! Rock beats Scissors';
            } 
            if (computer == "paper") {
                result.textContent =  'You LOSE! Paper beats Rock';
            }
            break;
        case "paper":
            if (computer == "rock") {
                result.textContent =  'You WIN! Paper beats Rock';
            } 
            if (computer == "scissors") {
                result.textContent =  'You LOSE! Scissors beats Paper';
            }
            break;
        case "scissors":
            if (computer == "paper") {
                result.textContent =  'You WIN! Scissors beats Paper';
            } 
            if (computer == "rock") {
                result.textContent =  'You LOSE! Rock beats Scissors';
            }
            break;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () =>{
        console.log(btn.className);
        playRound(btn.className,getComputerChoice());
    });//
});



/*function runGame() {
    i = 5
    while (i!=1) {
        ps = prompt("Enter your move");
        cs = getComputerChoice();
        playRound(ps,cs);
        i--;
    }
}
*/



//getComputerChoice();
//runGame();
