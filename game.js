function getComputerChoice() {
    //generate random number from 0 to 2
    let rand = Math.floor(Math.random() * 3);
    let choice = "";
    if (rand == 0) {
        choice = "rock"
    }else if (rand == 1) {
        choice = "paper"
    }else {
        choice = "scissors"
    }
    return choice
}



function playRound(plrSel, cpuSel) {
    plrSel = plrSel.toLowerCase()
    if (plrSel == "rock" && cpuSel == "paper") {
        return "You lose"
    }else if (plrSel == "paper" && cpuSel == "scissors") {
        return "You lose"
    }else if (plrSel == "scissors" && cpuSel == "rock") {
        return "You lose"
    }else if (plrSel == cpuSel) {
        return "It's a tie"
    }else {
        return "You win"
    }
}

function game(){
    for (let i = 0; i < 5;i++) {
        let playerSelection = getUserInput()
        let cpuSelection = getComputerChoice()
        alert(playRound(playerSelection, cpuSelection))
    }
}

function getUserInput() {
    let playerSelection = ""
    let gotten = false;
    while (gotten == false) {
        playerSelection = prompt("rock, paper or scissors?")
        playerSelection = playerSelection.toLowerCase()
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            gotten = true;
        }else{
            alert("invalid input")
        }
    }
    return playerSelection;
}

game();