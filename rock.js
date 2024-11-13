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
let humanScore = 0;
let computerScore = 0;//let userChoice = 0;

const humanScoreDisplay = document.getElementById("humanScore");
const computerScoreDisplay = document.getElementById("computerScore");

function updateScore(){
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    if(humanScore >= 5){
        humanScore=0;
        computerScore=0;
        alert('you win');
    }
    if(computerScore >= 5){
        humanScore = 0;
        computerScore = 0;
        alert('computer won');
    }
}
const rock = document.getElementById("rock");
rock.addEventListener("click",function(){
    if(playRound("rock",getComputerChoice())=="computer wins"){
        computerScore++;
    }
    else if(playRound("rock",getComputerChoice())=="human wins"){
        humanScore++;
    }
    else{

    }
    updateScore();
});
const paper = document.getElementById("paper");
paper.addEventListener("click",function(){
    if(playRound("paper",getComputerChoice())=="computer wins"){
        computerScore++;
    }
    else if(playRound("paper",getComputerChoice())=="human wins"){
        humanScore++;
    }
    else{

    }
    updateScore();
});
const scissors = document.getElementById("scissors");
scissors.addEventListener("click",function(){
    if(playRound("scissors",getComputerChoice())=="computer wins"){
        computerScore++;
    }
    else if(playRound("scissors",getComputerChoice())=="human wins"){
        humanScore++;
    }
    else{

    }
    updateScore();
});
//let rounds = prompt("how many rounds") ;
/*function getUserChoice(){
    let choice = prompt("Rock, paper ,Scissors?");
    return choice.toLowerCase();
}*/

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
   console.log(getComputerChoice());
   /*function playGame(rounds){
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
    }*/
   

   
   //playGame(rounds)