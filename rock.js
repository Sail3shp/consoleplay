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
let rounds = prompt("how many rounds") ;
function getUserChoice(){
    let choice = prompt("Rock, paper ,Scissors?");
    return choice.toLowerCase();
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice,computerChoice){
    if(humanChoice =="rock" && computerChoice=="paper"){
        return "computer wins";
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
   console.log(computerChoice)
   function playGame(rounds){
    for(let i=0;i<rounds;i++){
        if(playRound(getUserChoice(),computerChoice)=="computer wins"){
            computerScore++;
        }
        else if(playRound(getUserChoice(),computerChoice)=="human wins"){
            humanScore++;
        }
        else{
            humanScore++;
            computerScore++;
        }
    }
    if(computerScore>humanScore){
        alert("computer wins")
    }
    else{
        alert("human wins")
    }

   }
   playGame(rounds)