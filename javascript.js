console.log("Hello");

const RPS = ["Rock", "Paper", "Scissors"];

function getComputerChoice()
{
    let number = Math.floor(Math.random()*RPS.length)
    return RPS[number];
}

function getPlayerChoice()
{
    let choice = prompt(RPS);
    return choice;
}

function playRound(getComputerChoice, getPlayerChoice)
{
    let player = getPlayerChoice.toLowerCase();
    let computer = getComputerChoice.toLowerCase();

    if(player === computer)
    {
        return "TIE GAME";
    }

    if((player === "paper" && computer === "rock") || (player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper"))
    {
        return `Congratulation you win! ${player} beats ${computer}`;
    }
    else{
        return `You lose! ${computer} beats ${player}`;
    }
}


console.log(playRound(getComputerChoice(), getPlayerChoice()))