console.log("Hello");

//array holding possible choices
const RPS = ["Rock", "Paper", "Scissors"];

/*
Method that will get a random number and use that number to access one of the choices in the RPS Array
*/
function getComputerChoice()
{
    let number = Math.floor(Math.random()*RPS.length)
    return RPS[number];
}

/*
A prompt will pop up to get user input
*/
function getPlayerChoice()
{
    let choice = prompt(RPS);
    return choice;
}

/*
Compares the computer choice with the player choice
returns winner
*/
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

/*
Final game
Asks user how many rounds they wish to play and goes through that many times
*/
function finalGame()
{
    let numberOfRound = prompt("How many round would you like to play?")

    for(let i = 0; i < numberOfRound; i++)
    {
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
    }
    
}

console.log(finalGame())