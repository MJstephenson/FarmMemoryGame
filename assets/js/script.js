let canFlip = false;

//Appends an "active" class to .popup-instructions-overlay and .popup-instructions-content when the "instructions" button is clicked
$(".instruct-btn").on("click", function () {
  $(".popup-instruction-overlay, .popup-instruction-content").addClass("active");
});

//Removes the "active" class to .popup instructions-overlay and .popup-instructions-content when the "Close" button is clicked 
$(".close-modal-btn").on("click", function () {
  $(".popup-instruction-overlay, .popup-instruction-content").removeClass("active");
});

//On farm game button click, hide all Dom Elements, and only show main game section with farm cards only
$("#farm-btn").on("click", function () {
  $(".header-text, .instructions").addClass("inactive");
  $(".choose-game").removeClass("active");
  $(".main-game, .farm-cards").addClass("active");
  $(".game-type").text('Farm'); //Change game name
  $(".block").addClass("inactive"); //hide block for page layout
});

//On space game button click, hide all Dom Elements, and only show main game section with space cards only
$("#space-btn").on("click", function () {
  $(".header-text, .instructions").addClass("inactive");
  $(".choose-game").removeClass("active");
  $(".main-game, .space-cards").addClass("active");
  $(".game-type").text('Space'); //Change game name
  $(".block").addClass("inactive"); //hide block for page layout
});

//On car game button click, hide all Dom Elements, and only show main game section with car cards only
$("#cars-btn").on("click", function () {
  $(".header-text, .instructions").addClass("inactive");
  $(".choose-game").removeClass("active");
  $(".main-game, .car-cards").addClass("active");
  $(".game-type").text('Car'); //Change game name
  $(".block").addClass("inactive"); //hide block for page layout
});

//On new game style button click, hide all Dom Elements, and show header, instructions and choose style section
$("#new-style-btn").on("click", function () {
  $(".header-text, .instructions").removeClass("inactive");
  $(".choose-game").addClass("active");
  $(".main-game").removeClass("active"); //hide block for page layout
  $(".block.inactive").removeClass("inactive"); //hide block for page layout
  resetGameStyle()
});

let cards = $('.image-container'); // select all the cards
//Appends an "active class to .choose-game when the "start" button is pressed and hides the begin section from the DOM
$("#start-btn").on("click", function () {
  $(".choose-game").addClass("active");
  $(".begin-section").addClass("inactive");
  for (let i = cards.length - 1; i > 0; i--) { //Make cards shuffle with Fisher-Yates shuffle algorithm
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  $('.farm-cards').append(cards); // append the shuffled cards to the DOM
});

//Reset Button
$("#reset-btn").on("click", function () {
  resetTimer()
  $(".choose-game").addClass("active");
  $(".begin-section").addClass("inactive");
  for (let i = cards.length - 1; i > 0; i--) { //Make cards shuffle with Fisher-Yates shuffle algorithm
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  $('.farm-cards').append(cards); // append the shuffled cards to the DOM
  $('.image-container').children('.front').removeClass('active');
  $('.image-container').children('.back').removeClass('active');
  flipped = 0
});

//Add reset game style function to clear the prevous game when choosing a new style of game
function resetGameStyle() {
  const cardsList = ['.farm-cards', '.space-cards', '.car-cards'].forEach(item => {
    const div = document.querySelector(item);
    div.classList.remove('active');
  });
  //JQuery Version
  //const cardsList = ['.farm-cards', '.space-cards', '.car-cards'];
  //$(cardsList).each(function(item) {
  // $(cardsList[item]).removeClass('active');
  //})
}

//Add timer
let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let gameState = 0

document.querySelector('.start-btn').addEventListener('click', startGame); //start timer on start button click
document.querySelector('#new-style-btn').addEventListener('click', resetTimer); //reset timer on new game style button click
document.querySelector('#reset-btn').addEventListener('click', resetTimer); //reset timer on reset button click


function startGame() { //function to start the timer if a gameState is 0 (not running).
  if (gameState == 0) {
    startTimer();
    gameState = 1 //Adds the gameState to 1. This stops the startTimer function from repeating on each click and speeding the timer up
    canFlip = true;
  }
}
//start timer function
function startTimer() {
  milliseconds++;

  if (milliseconds >= 100) {
    seconds++;
    milliseconds = 0;
  }

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

  document.querySelector('#timer').innerHTML = `${minutes}:${seconds}:${milliseconds}`;
  timer = setTimeout(startTimer, 10); //start timer after 10 milliseconds
}

function resetTimer() {
  clearTimeout(timer); //clears timer https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
  timer = null //resets the timer to 0 when a new game starts on a card click
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.querySelector('#timer').innerHTML = `00:00:00`;
  gameState = 0 //on click of reset button sets the gameState to 0 (not running)
}

// flip card section

// Make cards flip (to a maximum of 2 cards)

let flipped = 0; // This will allow the number of flipped cards to be recorded
let currentCard; // This is the current card
let flippedCards = []; // This array stores the 2 flipped cards

$(".image-container").on("click", function () {
  if (canFlip) {
    if (flipped < 2) { //check if the number of flipped cards is <2
      $(this).children('.front').addClass('active');
      $(this).children('.back').addClass('active');
      flippedCards.push(this); //add the card to the flipped cards array
      flipped++; // gives the card in the array a value that increases by 1 so that if the number <2 the if code will execute >2 the else will execute
    } else {
      if (!flippedCards.includes(this)) { // checks to see if the flipped card is one of the flipped cards
        $(this).children('.front').removeClass('active');
        $(this).children('.back').removeClass('active');
      }
    }
  }
});




// make all cards flip when shift+r is pressed and flip back when both pressed again
$(document).on('keydown', function (e) {
  if (e.shiftKey && e.keyCode === 82) { //check if shift + r is pressed
    $('.image-container').children('.front').toggleClass('active');
    $('.image-container').children('.back').toggleClass('active');
  }
});