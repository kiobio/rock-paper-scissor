let userChosen
let computerChosen
var result = results();
const displayResults = document.querySelector('.result');
const computerChoice = document.querySelector('#computer_choice');
const userChoice = document.querySelector('#your_choice');
const randomNumber = Math.floor(Math.random() * 3);
const possibleChoices = document.querySelectorAll('.choice');
const textPCchoice = document.querySelector('#PC_choice_text');

//rock = 1
//paper = 2
//scissors = 3


//get user choice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChosen = e.target.id;
    getComputerChoice();
    results();
    userChoice.innerHTML = userChosen;
    textPCchoice.innerHTML = computerChosen;
    displayResults.innerHTML = result;
}))

//get random computer choice


function getComputerChoice(){
    if (randomNumber === 1){
         computerChoice.classList.add("result_rock");
         return computerChosen = 'rock';
    }else if(randomNumber === 2){
        computerChoice.classList.add('result_paper');
        return computerChosen = 'paper';
    }else if(randomNumber === 3){
        computerChoice.classList.add('result_scissors');
        return computerChosen = 'scissors';
    }
}



//get results
function results(){
    if(computerChosen === userChosen){
        return result = "Tie!"
    }else if(computerChosen === 'rock' && userChosen === 'paper'){
        return result = "You win!"
    }else if(computerChosen === 'rock' && userChosen === 'scissors'){
        return result = "You lost!"
    }else if(computerChosen === 'paper' && userChosen === 'rock'){
        return result = "You lost!"
    }else if(computerChosen === 'paper' && userChosen === 'scissors'){
        return result = "You won!"
    }else if(computerChosen === 'scissors' && userChosen === 'paper'){
        return result = "You lost!"
    }else if(computerChosen === 'scissors' && userChosen === 'rock'){
        return result = "You win!"
    }
}


//end in 5:45