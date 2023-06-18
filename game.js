let plrPoints = 0;
let CPUPoints = 0;
let plrWon = false;

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
    if (plrSel == "rock" && cpuSel == "paper") {
        CPUPoints++;
        return "You lose"
        
    }else if (plrSel == "paper" && cpuSel == "scissors") {
        CPUPoints++;
        return "You lose"
        
    }else if (plrSel == "scissors" && cpuSel == "rock") {
        CPUPoints++;
        return "You lose"
        
    }else if (plrSel == cpuSel) {
        plrPoints++;
        CPUPoints++;
        return "It's a tie"
    }else {
        plrPoints++;
        return "You win"
        
    }
}

function game(plrSel){
        let playerSelection = plrSel;
        let cpuSelection = getComputerChoice();
        console.log(playRound(playerSelection, cpuSelection));

        document.querySelector("#plrPoints").innerHTML = plrPoints;
        document.querySelector("#cpuPoints").innerHTML = CPUPoints;
        if (plrPoints + CPUPoints >= 5) {
            let wonStatus = document.createElement("p");
            if (plrPoints > CPUPoints) {
                plrWon = true;
                wonStatus.innerText = "Player Won!";
                document.querySelector("#results").appendChild(wonStatus);
            }else if (plrPoints < CPUPoints){
                wonStatus.innerText = "Computer Won!";
                document.querySelector("#results").appendChild(wonStatus);
            }else {
                wonStatus.innerText = "It's a tie!";
                document.querySelector("#results").appendChild(wonStatus);
            }
            
        }
}

rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", function(){
    game("rock");
})

paper = document.querySelector("#paper");
paper.addEventListener("click", function() {
    game("paper");
})

scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function() {
    game("scissors");
})