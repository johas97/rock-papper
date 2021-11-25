function computerPlay() {
    let playNum = Math.floor((Math.random()*3));

    if (playNum === 0){
        return 'rock';
    }
    else if (playNum === 1){
        return 'paper';
    }
    else {
        return 'scissors';
    }
};

function playRound(playerSelection, computerSelection){
   playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You Win! Rock beats sicssors.';

    }else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats rock.';

    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats paper.';
        
    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats rock';

    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beat paper.';
        
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats scissors';
        
    }else {
        return 'Draw!';

    }

}; 

function game (){
     
    let playerWins = 0;
    let cpuWins = 0;
    for (;;) {

        let playerSelector = '';
        const computerSelection = computerPlay();
        let resultString = (playRound(playerSelector,computerSelection));
        console.log(resultString);

        if (resultString.includes('Win')) {
            playerWins += 1;
        }
        else if(resultString.includes('Lose')) {
            cpuWins += 1;
        }   
    }

    /*
    if (playerWins > cpuWins) {
        console.log('Congrats You Win');
    } else if (cpuWins > playerWins) {
        console.log('You Lose');
    }
    else {
        console.log('Five matches led to a draw');
    }*/

}



const paperbutn = document.querySelector(".paperbutn");
const rockbutn = document.querySelector(".rockbutn");
const sicssorbutn = document.querySelector(".sicssorbutn");
const resultText = document.querySelector(".resultText");
const scoreCPURef = document.querySelector(".scoreCPU");
const scoreUserRef = document.querySelector(".scoreUser");

let scoreCPU = 0;
let scoreUser = 0;

scoreCPURef.textContent = scoreCPU;
scoreUserRef.textContent = scoreUser;


paperbutn.addEventListener('click', e => {
    const computerSelection = computerPlay();
    let resultString = (playRound("paper",computerSelection));
    
    if (resultString.includes('Win')) {
        scoreUser += 1;
    }
    else if(resultString.includes('Lose')) {
        scoreCPU += 1;
    } 

    if (scoreCPU === 5) {
        resultText.textContent = "Computer won the game!"
        scoreUser = 0;
        scoreCPU = 0;
    }
    else if (scoreUser === 5) {
        resultText.textContent = "You Won the game!"
        scoreUser = 0;
        scoreCPU = 0;
    }
    else {
        resultText.textContent = resultString;

    }
    scoreCPURef.textContent = scoreCPU;
    scoreUserRef.textContent = scoreUser;
})

rockbutn.addEventListener('click', e => {
    const computerSelection = computerPlay();
    let resultString = (playRound("rock",computerSelection));
    resultText.textContent = resultString;
    
    if (resultString.includes('Win')) {
        scoreUser += 1;
    }
    else if(resultString.includes('Lose')) {
        scoreCPU += 1;
    } 

    if (scoreCPU === 5) {
        resultText.textContent = "Computer won the game!"
        scoreUser = 0;
        scoreCPU = 0;
    }
    else if (scoreUser === 5) {
        resultText.textContent = "You Won the game!"
        scoreUser = 0;
        scoreCPU = 0;
    }
    else {
        resultText.textContent = resultString;

    }
    scoreCPURef.textContent = scoreCPU;
    scoreUserRef.textContent = scoreUser;
})

sicssorbutn.addEventListener('click', e => {
    const computerSelection = computerPlay();
    let resultString = (playRound("scissors",computerSelection));
    resultText.textContent = resultString;

    if (resultString.includes('Win')) {
        scoreUser += 1;
    }
    else if(resultString.includes('Lose')) {
        scoreCPU += 1;
    } 

    if (scoreCPU === 5) {
        resultText.textContent = "Computer won the game!";
        scoreUser = 0;
        scoreCPU = 0;
    }
    else if (scoreUser === 5) {
        resultText.textContent = "You Won the game!";
        scoreUser = 0;
        scoreCPU = 0;
    }
    else {
        resultText.textContent = resultString;

    }
    scoreCPURef.textContent = scoreCPU;
    scoreUserRef.textContent = scoreUser;
})