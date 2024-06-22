let userScore =0;
let computerScore =0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll('.choice');
const userScorePara = document.querySelector('#User');
const computerScorePara = document.querySelector('#Computer');

const ComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}
const showWinner = (userWin) => {
if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = 'You win';
    msg.style.backgroundColor = 'green';
    console.log('win');
}
else{
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = 'You lose';
    msg.style.backgroundColor = 'red';
    console.log('lose');
}
};
const playGame = (userChoice) => {
const computerChoice = ComputerChoice();
let userWin = true;
if(userChoice===computerChoice){
    msg.innerText = 'Draw';
    msg.style.backgroundColor = '#081b31';
    console.log('draw');
}
else if(userChoice==='rock' && computerChoice==='scissors' || userChoice==='paper' && computerChoice==='rock' || userChoice==='scissors' && computerChoice==='paper'){
    userWin = true;
    showWinner(userWin);
}
else{
    userWin = false;
    showWinner(userWin);
    console.log('lose');
}
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
       const userChoice = choice.getAttribute('id');
       playGame(userChoice);
    });
})