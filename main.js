function getRandomNum(max){
    return Math.floor(Math.random()*max) +1;
}
function getComputerChoice(){
    let x=getRandomNum(3); // based on the rand return rock paper or scissors
    let choice="";
    switch (x) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;    
    }
    return choice;
}
//function getPlayerChoice(){
  //  let choice = prompt("Enter your choice: ");
    //let result = choice.toLowerCase(choice);
    //return result;
//}
function playRound(playerSelection){ // run a single round
    let result=0;
    let computerSelection=getComputerChoice();
    if(computerSelection==="rock"){
        switch (playerSelection) { // logic for when comp selects rock
            case "scissors":
                result=-1;
                break;
            case "paper":
                result=1;
                break;
            default:
                break;
        }
    } else if(computerSelection==="paper"){
        switch (playerSelection) {
            case "rock":
                result=-1;
                break;
            case "scissors":
                result=1;
                break;
            default:
                break;
        }
    } else if(computerSelection==="scissors"){
        switch (playerSelection) {
            case "paper":
                result=-1;
                break;
            case "rock":
                result=1;
                break;
            default:
                break;
        }
    } 
    console.log("The computer selected: ", computerSelection, "and the user selected: ", playerSelection);
    return result;
}
function game(p){
    let win =0, loss=0, draw=0;
    //removed logic to play 5 rounds
        //added input for user in the form of button let p=getPlayerChoice();
        //changed play round to get computer choice in itself
        let x=playRound(p);
        switch (x) {
            case 1:
                console.log("Congrats you won a round. You have now won ", ++win, " rounds.")
                break;
            case -1:
                console.log("You lost this round."); 
                ++loss;
                break;
            case 0:
                console.log("You drew this round."); 
                ++draw;
                break;
        }
    
    console.log("Your record is ", win, "-", loss);
}
console.log(game());
