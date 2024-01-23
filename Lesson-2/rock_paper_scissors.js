const rlSync = require('readline-sync');
const VALID_CHOICES = ['rock','paper','scissors'];
const VALID_SHORT_CHOICES = ['r','p','s'];
const EASTER_EGG_CHOICES = ['nuke','love','sticks','stones','words','gun','magic'];

let gameRepeat = 'yes';
let playerWins = 0;
let computerWins = 0;
let easterEggsFoundArray = [];

function prompt(message) {
  console.log(`=> ${message}`);
}
function prompt2(message) {
  console.log(`\n${message}\n`);
}
function easterEggCount() {
  prompt(`${easterEggsFoundArray.length}/${EASTER_EGG_CHOICES.length} easter eggs found.
  ${easterEggsFoundArray.length === EASTER_EGG_CHOICES.length ?'\nHooray...\n' : ''}`);
}
function easterEggUpdate(choice) {
  if(!easterEggsFoundArray.includes(choice)) {
    easterEggsFoundArray.push(choice);
  }
  //sets easter egg ending 
  playerWins = 'void';
}

function easterEggDisplay(choice) {
  switch (choice) {
    case 'nuke' : prompt2(`Everyone loses.`);
      break;
    case 'love' : prompt2('You chose love in a game of rock paper scissors. Go home pal.');
      break;
    case 'sticks' : prompt2('Love these sticks bro. Where did you source these? These aren\'t native to these lands bro. Woahh man. Woah. Really love this bro.');
      break;
    case 'stones' : prompt2('One rock wasn\'t enough you had to bring the whole squad? Gtfo.');
      break;
    case 'words' : prompt2('Powerful');
      break;
    case 'gun' : prompt2('The police were called, Game\'s over.');
      break;
    case 'magic' : prompt2(`Bippity boppity boo, secret ending number ${easterEggsFoundArray.length} for you.`);
      break; 
  }
  easterEggCount();
}

function resetWinCount() {
  playerWins = 0;
  computerWins = 0;
}

function choiceValidator(choice) {
  switch (choice) {
    case 'r' : return 'rock';
    case 'p' : return 'paper';
    case 's' : return 'scissors';
    default : return choice;
  }
}

function displayWinner (choice, computerChoice) {
  console.clear();
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

if (EASTER_EGG_CHOICES.includes(choice)) {
  easterEggUpdate(choice);
  easterEggDisplay(choice);
  return;
}

if (choice === computerChoice) {
  prompt('You have tied')
} else if ((choice === 'rock' && computerChoice === 'scissors') ||
           (choice === 'paper' && computerChoice === 'rock') ||
           (choice === 'scissors' && computerChoice === 'paper')) {
  prompt('You win!');
  playerWins += 1;
} else {
  prompt('Computer wins');
  computerWins += 1;
}
}

let setComputerChoice = () => VALID_CHOICES[Math.floor(Math.random() * VALID_CHOICES.length)];
  
let playgame = () => {
  prompt(`Player wins: ${playerWins}, Computer wins: ${computerWins}`)
  
  let computerChoice = setComputerChoice();

  let choice  = rlSync.question(`Choose one: ${VALID_CHOICES.join(', ')}\n`);
  while (!(VALID_CHOICES.concat(EASTER_EGG_CHOICES, VALID_SHORT_CHOICES)).includes(choice)) {
    prompt('invalid choice');
    choice = rlSync.question(`Choose one: ${VALID_CHOICES.join(', ')}\n`);
  }
choice = choiceValidator(choice);

displayWinner(choice, computerChoice);
}

do {
  if (playerWins === 3 || computerWins === 3 || playerWins === 'void' ) {
    prompt(`Player wins: ${playerWins}, Computer wins: ${computerWins}\n `);
    prompt(playerWins === 3 ? 'You win the game!\n' : 'Try again\n');

    gameRepeat = rlSync.question('Type and enter "yes" or "y" if you would like to play again\n');
    resetWinCount();
    continue;
  }
  playgame();
} while (gameRepeat === 'yes' || gameRepeat === 'y');