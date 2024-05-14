console.log("Hello");

//array holding possible choices
const RPS = ["Rock", "Paper", "Scissors"];
let playerChoice = "";
let computerScore = 0;
let playerScore = 0;

/*
Method that will get a random number and use that number to access one of the choices in the RPS Array
*/

const computer = document.querySelector(".computer");
const compImg = document.querySelector("#comp");
function getComputerChoice()
{
    let number = Math.floor(Math.random()*RPS.length)
    if(RPS[number] == "Rock"){
        compImg.src="images/rock.jpg";
    }
    if(RPS[number] == "Paper"){
        compImg.src="images/paper.jpg";
    }
    if(RPS[number] == "Scissors"){
        compImg.src="images/Scissors.jpg";
    }
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

    if(computerScore == 5){
        alert("GAME OVER COMPUTER WINS");
    }else if(playerScore == 5){
        alert("GAME OVER YOU WIN");
    }

    if(player === computer)
    {
        return "TIE GAME";
    }

    if((computer == "scissors" && player == "rock") || 
    (computer == "rock" && player == "paper") || 
    ( computer == "paper" && player == "scissors")){
        computerScore++;
        // const node = document.createTextNode(`${computerScore} times`)
        // compScore.appendChild(node);
        compScore = document.getElementById("comp-score");
        compScore.innerHTML = ("Computer: " + computerScore);
        return `You LOSE :( ${player} beats ${computer}`;
    }else{
        playerScore++;
        urScore = document.getElementById("your-score");
        urScore.innerHTML = ("You: "+playerScore)
        return `You WIN! ${computer} beats ${player} `;
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

const questionMark = document.querySelector("img");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelector(".buttons");


const you = document.querySelector(".you");
const img = document.querySelector("img");

var urScore = document.querySelector("#your-score");
var compScore = document.querySelector("#comp-score");


function showRock(){
    img.src="images/rock.jpg";
    you.insertBefore(img, buttons);
}

function showPaper(){
    img.src="images/paper.jpg";
    you.insertBefore(img, buttons);
}

function showScissors(){
    img.src="images/scissors.jpg";
    you.insertBefore(img, buttons);
}

function showComputerScore(computerScore){

}

rock.addEventListener("click", () =>{
    playerChoice = "rock";
    showRock();
    console.log(playRound(playerChoice, getComputerChoice()));
})


paper.addEventListener("click", () =>{
    showPaper();
    playerChoice = "paper";
    console.log(playRound(playerChoice, getComputerChoice()));
});

scissors.addEventListener("click", () =>{
    playerChoice = "scissors";
    showScissors();
    console.log(playRound(playerChoice, getComputerChoice()));
});

//console.log(finalGame())

