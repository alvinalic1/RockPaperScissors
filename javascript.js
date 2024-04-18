console.log("Hello");

const RPS = ["Rock", "Paper", "Scissors"];

function getComputerChoice()
{
    let number = Math.floor(Math.random()*RPS.length)
    return RPS[number];
}

function getPlayerChoice()
{
    let choice = prompt("Pick Rock, Paper, or Scissors");
    return choice;
}

console.log(getComputerChoice())
console.log(getPlayerChoice())