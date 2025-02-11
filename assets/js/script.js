'jshint esversion:11, jquery:true';

let canPlaySound = false; //determine if a sound can be played

// toggle sound on/off button click
$("#toggle-sound").on("click", function () {
  canPlaySound = !canPlaySound;
  $("#toggle-sound").text(canPlaySound ? "Turn Sound Off" : "Turn Sound On");// button text change
});

function playSound(audioURL) { //new function, that accepts an audio url, when called, you pass in the audioUrl
  if (canPlaySound === true) { //if statement, that only runs if the canPlaySouund variable is true
    const audio = new Audio(audioURL); //Adds the url to the audio to be played
    audio.play();
  }
}

//On farm game button click, hide all Dom Elements, and only show main game section with farm cards only
$("#farm-btn").on("click", function () {
  gameType = '.farm-cards';
  $(".header-text, .instructions").addClass("inactive");
  $(".choose-game").removeClass("active");
  $(".main-game, .farm-cards").addClass("active");
  $(".game-type").text('Farm'); //Change game name
  $(".block").addClass("inactive"); //hide block for page layout
  $(".background-img").addClass("fields");
  playSound("assets/sounds/rooster.mp3");
  shuffleCards();
});

//On space game button click, hide all Dom Elements, and only show main game section with space cards only
$("#space-btn").on("click", function () {
  gameType = '.space-cards';
  $(".header-text, .instructions").addClass("inactive");
  $(".choose-game").removeClass("active");
  $(".main-game, .space-cards").addClass("active");
  $(".game-type").text('Space'); //Change game name
  $(".block").addClass("inactive"); //hide block for page layout
  $(".background-img").addClass("space");
  playSound("assets/sounds/blast.mp3");
  shuffleCards();
});

//On car game button click, hide all Dom Elements, and only show main game section with car cards only
$("#cars-btn").on("click", function () {
  gameType = '.car-cards';
  $(".header-text, .instructions").addClass("inactive");
  $(".choose-game").removeClass("active");
  $(".main-game, .car-cards").addClass("active");
  $(".game-type").text('Car'); //Change game name
  $(".block").addClass("inactive"); //hide block for page layout
  $(".background-img").addClass("racetrack");
  playSound("assets/sounds/engine-rev.mp3");
  shuffleCards();
});

//On new game style button click, hide all Dom Elements, and show header, instructions and choose style section
$("#new-style-btn").on("click", function () {
  $(".header-text, .instructions").removeClass("inactive");
  $(".choose-game").addClass("active");
  $(".main-game").removeClass("active"); //hide block for page layout
  $(".block.inactive").removeClass("inactive"); //hide block for page layout
  resetGameStyle();
  turnsCounter = 0;
  $('.turns-counter').text(turnsCounter);
  flipped = 0;
  $('.image-container').removeClass('matched');
  matchedCards = [];
  flippedCards = [];
  canFlip = false;
  $(".background-img").removeClass("racetrack space fields");
  $(".background-img").addClass("wool");
  window.scrollTo(0,0);
  playSound("assets/sounds/high-pop.mp3");
});

//Appends an "active class to .choose-game when the "start" button is pressed and hides the begin section from the DOM
$("#start-btn").on("click", function () {
  $(".choose-game").addClass("active");
  $(".begin-section").addClass("inactive");
  turnsCounter = 0;
  playSound("assets/sounds/pop.mp3");
});

$(".instruct-btn").on("click", function () {
  playSound("assets/sounds/pop.mp3");
});

$(".close-btn").on("click", function () {
  playSound("assets/sounds/high-pop.mp3");
});

function shuffleCards() {
  let cards = $(gameType + ' .image-container').toArray(); // select all cards from the game type and convert to array
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  $(gameType).append(cards); // append the shuffled cards back to the DOM
} 

// Winning modal close button
$("#win-close").on("click", function () {
  resetTimer();
  $(".begin-section").addClass("inactive");
  $('.image-container').children('.front').removeClass('active');
  $('.image-container').children('.back').removeClass('active');
  shuffleCards();
  flipped = 0;
  $('.image-container').removeClass('matched');
  matchedCards = [];
  flippedCards = [];
  turnsCounter = 0;
  $('.turns-counter').text(turnsCounter);
  canFlip = false; //Make it so you cannot flip cards after pressing reset button
  playSound ("assets/sounds/pop.mp3");
});

//Reset Button
$("#reset-btn").on("click", function () {
  resetTimer();
  $(".begin-section").addClass("inactive");
  $('.image-container').children('.front').removeClass('active');
  $('.image-container').children('.back').removeClass('active');
  shuffleCards();
  flipped = 0;
  $('.image-container').removeClass('matched');
  matchedCards = [];
  flippedCards = [];
  turnsCounter = 0;
  $('.turns-counter').text(turnsCounter);
  canFlip = false; //Make it so you cannot flip cards after pressing reset button
  playSound("assets/sounds/reset.mp3");
});

//Add reset game style function to clear the prevous game when choosing a new style of game
function resetGameStyle() {
  const cardsList = ['.farm-cards', '.space-cards', '.car-cards'];
  $(cardsList).each(function(item) {
   $(cardsList[item]).removeClass('active');
  });
}

//Add timer
let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let gameState = 0;

document.querySelector('.start-btn').addEventListener('click', startGame); //start timer on start button click
document.querySelector('#new-style-btn').addEventListener('click', resetTimer); //reset timer on new game style button click
document.querySelector('#reset-btn').addEventListener('click', resetTimer); //reset timer on reset button click

function startGame() { //function to start the timer if a gameState is 0 (not running).
  if (gameState == 0) {
    startTimer();
    gameState = 1; //Adds the gameState to 1. This stops the startTimer function from repeating on each click and speeding the timer up
    canFlip = true; //Allows the cards to flip if the game is not running
    setTimeout(function() {
     playSound("assets/sounds/start-game.mp3");
    }, 300);
  }
}
//start timer function
function startTimer() {
  milliseconds++;

  if (milliseconds >= 60) {
    seconds++;
    milliseconds = 0;
  }

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

  document.querySelector('.timer').innerHTML = `${minutes}:${seconds}:${milliseconds}`;
  timer = setTimeout(startTimer, 10); //start timer after 10 milliseconds
}

function resetTimer() {
  clearTimeout(timer); //clears timer https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
  timer = null; //resets the timer to 0 when a new game starts on a card click
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.querySelector('.timer').innerHTML = `00:00:00`;
  gameState = 0; //on click of reset button sets the gameState to 0 (not running)
}

// flip card section

// Make cards flip (to a maximum of 2 cards)
let flipped = 0; // This will allow the number of flipped cards to be recorded
let flippedCards = []; // This array stores the 2 flipped cards
let canFlip = false;
let gameType = '';
let matchedCards = [];
let turnsCounter = 0;
let lastClicked;

$(".image-container").on("click", function () {
  if (canFlip) { //makes sure the cards can't flip after a reset until you press the start button
    if (flipped < 2) { //check if the number of flipped cards is <2
      if (this === lastClicked || $(this).hasClass('matched')) { //makes sure that the same card cannot be clicked again / and if matched cannot be repeatedly clicked to win the game
        return;
      }
      lastClicked = this;
      $(this).children('.cards-f').addClass('active'); //turns cards over to make the image visable
      flippedCards.push(this); //add the card/max 2 to the flipped cards array with the data-card-image value
      flipped++; // gives the card in the array a value that increases by 1 so that if the number <2 the if code will execute >2 the else will execute

      if (flipped === 2) { // when 2 cards are flipped....
        let firstFlippedCard = $(flippedCards[0]).children('.image-2')[0].dataset.cardImage; //select the dataset from the 1st flipped card
        let secondFlippedCard = $(flippedCards[1]).children('.image-2')[0].dataset.cardImage; //select the dataset from the 2nd flipped card
        if (firstFlippedCard !== secondFlippedCard) {
          turnsCounter++; //  Increases the turns taken counter when two cards have been flipped
          $('.turns-counter').text(turnsCounter); // Updates the turns taken counter display
          setTimeout(function () { // sets a delay
            $('.image-container:not(.matched) > *').removeClass('active'); //Removes class active from matched cards so they dont flip back over
            flippedCards = []; // This will empty the flippedCards array
            flipped = 0; // This starts the flipped variable to 0
            lastClicked = null; //allows the game logic to continue
          }, 800); //sets the delay time
        } else {
          matchedCards.push(flippedCards[0], flippedCards[1]); //Push the flipped cards to the matching cards array so they cannot be used again
          matchedCards.forEach(card => {
            card.classList.add('matched');
          }); // Add a class of matched to matched cards
          flippedCards = []; // This will empty the flippedCards array
          flipped = 0; // This starts the flipped variable to 0
          turnsCounter++; // Increases the turns taken counter when two cards have been flipped
          $('.turns-counter').text(turnsCounter); // Updates the turns taken counter display
          lastClicked = null; //allows the game logic to continue
          playSound ("assets/sounds/match.mp3");
          if (matchedCards.length === 16) {
            winnerModal();
          }
        }
      }
    }
  }
});

function winnerModal() {
  clearTimeout(timer);
  $('#staticBackdrop').modal('show');
  document.querySelector('.endtime').innerHTML = `${minutes}:${seconds}:${milliseconds}`;
  
  let starRating = '';
  if (turnsCounter >= 8 && turnsCounter <= 20) {
    starRating = '⭐️⭐️⭐️';
  } else if (turnsCounter >= 21 && turnsCounter <= 30) {
    starRating = '⭐️⭐️';
  } else if (turnsCounter > 31 && turnsCounter <= 40) {
    starRating = '⭐️';
  }
  document.querySelector('.star-rating').innerHTML = starRating;
  setTimeout(function() {
    playSound("assets/sounds/winner.mp3");
  }, 2500);
}

// make all cards flip when shift+r is pressed and flip back when both pressed again
$(document).on('keydown', function (e) {
  if (e.shiftKey && e.keyCode === 82) { //check if shift + r is pressed
    $('.image-container').children('.front').toggleClass('active');
    $('.image-container').children('.back').toggleClass('active');
  }
});
