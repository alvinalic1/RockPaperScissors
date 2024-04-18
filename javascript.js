console.log("Hello");

const RPS = ["Rock", "Paper", "Scissors"];

function getComputerChoice()
{
    let number = Math.floor(Math.random()*RPS.length)
    return RPS[number];
}

console.log(getComputerChoice())