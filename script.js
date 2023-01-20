/* This code is for a game of rock paper scissors. Player vs computer. 1 game = 5 rounds.
*/


// list of computer choices and an empty array that will be populated by winners
const choices =["rock", "paper", "scissors"]
const winners =[];

//  plays 5 rounds back to back and changes button to play again after 1 game
function game(){
    for (let i =1; i<=5; i++){
    playRound(i);
}
document.querySelector("button").textContent="Play Again?"
logWins();
}

// invokes 1 round, populates winner array, and publishes results of round
function playRound(round) {
    const playerSelection = playerChoice()
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection) //ties results of functions to a variable which is then entered as a parameter
    winners.push(winner); //adds player or computer to winners array
    logRound(playerSelection,computerSelection,winner,round)// invokes function to determine individual round winners


};

// prompts user to enter choice, rejects invalid inputs, accounts for capitalization
function playerChoice(){
    let input = prompt("Type Rock, Paper, or Scissors");
    while(input == null){ //prompts user to enter input and does not allow cancel
        input=prompt("Type Rock, Paper, or Scissors")
    }
    input=input.toLowerCase();//accounts for capitals
    let check = validateInput(input); //invokes function to check if rock paper or scissors was entered
    while(check==false){// if not rock paper scissors, give error messag and prompt again
      input=  prompt("Invalid input. Please enter Rock, Paper, or Scissors");
      input=input.toLowerCase();//checks for capitals again
      check=validateInput(input);
    }
        return input
        
};

//generates computer choice at random
function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]

}

///if input is rock or paper or scissors, return true
function validateInput(choice){
    if(choices.includes(choice)){
        return true;
    }else{
        return false
    }
}

//determines the winner of a round
function checkWinner(choiceP, choiceC){
    if(choiceP===choiceC){
        return "Tie"
    }else if((choiceP==="rock" && choiceC ==="scissors") || //all the ways player could win
    (choiceP==="paper" && choiceC==="rock") ||
    (choiceP==="scissors" && choiceC==="paper")){
        return "player"
    }else{
        return "computer"
    }
}

//overall outcome
function logWins(){
    let playerWins = winners.filter((item)=> item == "player").length; //how many times player is returned
    let computerWins =winners.filter((item) => item == "computer").length;//how many times computer is returned
    let ties = winners.filter((item) => item=="Tie").length//how many times tie is returned
console.log("Final outcome:")
console.log("Player Wins:", playerWins);
console.log("Computer Wins:", computerWins);
console.log(" Ties:", ties);

}

//individual round winners
function logRound(playerChoice,computerChoice,winner,round){
    console.log("Round:", round);
    console.log (`Player chose: ${playerChoice}`);
    console.log(`computer chose:`,computerChoice)
    console.log(winner, "Won the round")
}

