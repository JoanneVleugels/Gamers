let userScore= 0; 
let computerScore= 0; 
let computerChoice
const userScoreText= document.querySelector("#scoreboardusers"); 
const computerScoreText= document.querySelector("#scoreboardcomputer"); 
const messageDiv= document.querySelector(".message");
const steenDiv= document.querySelector("#steen");
const papierDiv= document.querySelector("#papier");
const schaarDiv= document.querySelector("#schaar");
const music= new Audio("./sound/win.mp3") //https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

function getComputerChoice() {
  const choices= ['steen', 'papier', 'schaar'];
    const randomNumber= Math.floor(Math.random()*3); // Math radom is een villekeurig nummer van 0 tot 3, floor rond het af.
   
    computerChoice = choices[randomNumber];
}

getComputerChoice()

function win(user, computer) {
    userScore++; //wanneer user wint gaat de score omhoog +1.
    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
    messageDiv.textContent = words(user) + " destroys " + words(computer) + "!! Good job ;3 You WIN!";
    music.play()
    document.body.classList.add("win-bg");//ChatGPT //Prompt: How can I add a few second change in background colour?
    setTimeout(() => {
        document.body.classList.remove("win-bg");
    }, 400);
}

function lose(user, computer) {
    computerScore++; //wanneer computer wint gaat de score omhoog.
    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
    messageDiv.textContent = words(user) + " is beaten by " + words(computer) + "!! To bad :( You lost";

    document.body.classList.add("lose-bg"); //ChatGPT //Prompt: How can I add a few second change in background colour?
    setTimeout(() => {
        document.body.classList.remove("lose-bg");
    }, 400);
}
 
function draw(user, computer) { // gelijk spel, de score word niet aangepast.
    messageDiv.textContent = words(user) + " draws " + words(computer) + "! Play again!";
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
function words (instrument) { // Papier, steen en schaar (woorden) worden vervangen door woorden die beter in de text passen.
    if (instrument === "schaar") return "SCISSORS";
    if (instrument === "steen") return "ROCK";
    if (instrument === "papier") return "PAPER";
}

function game(userChoice) {
    if (userChoice === computerChoice) {
        draw(userChoice, computerChoice);
    } else if (
        (userChoice === "steen" && computerChoice === "schaar") ||
        (userChoice === "schaar" && computerChoice === "papier") ||
        (userChoice === "papier" && computerChoice === "steen")
    ) {
        win(userChoice, computerChoice);
    } else {
        lose(userChoice, computerChoice);
    }
    getComputerChoice()
}

steenDiv.addEventListener('click', function(){
    game("steen");
})
papierDiv.addEventListener('click', function(){
    game("papier");
})
schaarDiv.addEventListener('click', function(){
    game("schaar");
})

