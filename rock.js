console.log("hello");
function getComputerChoice(){
    let randValue = Math.floor(Math.random()*3);
    if(randValue == 0){
        return "rock";
    }
    else if(randValue == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
let computerChoice = getComputerChoice().toLowerCase();
function getUserChoice(){
    let choice = prompt("Rock, paper ,Scissors?");
    return choice.toLowerCase();
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    if(humanChoice =="rock" && computerChoice=="paper"){
        return "computer won";
    }
    else if(humanChoice =="rock" && computerChoice=="scissors"){
        return "human wins";
    }
    else if(humanChoice==computerChoice){
        return "draw";
    }
    else if(humanChoice=="paper" && computerChoice=="scissors"){
        return "computer wins";
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        return "human wins"
    }
    else if(humanChoice=="scissors" && computerChoice=="rock"){
        return "computer wins"
    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        return "human wins";
    }
    else{
        return "not valid input"
    }
   }
   console.log(playRound(getUserChoice(),computerChoice));
   console.log(computerChoice)