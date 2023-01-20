//Appends an "active" class to .popup-instructions-overlay and .popup-instructions-content when the "instructions" button is clicked
$(".instruct-btn").on("click", function () {
  $(".popup-instruction-overlay, .popup-instruction-content").addClass("active");
});

//Removes the "active" class to .popup instructions-overlay and .popup-instructions-content when the "Close" button is clicked 
$(".close-modal-btn").on("click", function () {
  $(".popup-instruction-overlay, .popup-instruction-content").removeClass("active");
});

//Appends an "active class to .choose-game when the "start" button is pressed and hides the begin section from the DOM
$("#start-btn").on("click", function () {
  $(".choose-game").addClass("active");
  $(".begin-section").addClass("inactive");
});

//On farm game button click, hide all Dom Elements, and only show main game section with farm cards only
$("#farm-btn").on("click", function () {
  $(".header-text, .instructions").addClass("inactive");
  $(".choose-game").removeClass("active");
  $(".main-game, .farm-cards").addClass("active");
  $(".block").addClass("inactive"); //hide block for page layout
});

//On space game button click, hide all Dom Elements, and only show main game section with space cards only
$("#space-btn").on("click", function () {
  $(".header-text, .instructions").addClass("inactive");
  $(".choose-game").removeClass("active");
  $(".main-game, .space-cards").addClass("active");
  $(".block").addClass("inactive"); //hide block for page layout
});

//On car game button click, hide all Dom Elements, and only show main game section with car cards only
$("#cars-btn").on("click", function () {
  $(".header-text, .instructions").addClass("inactive");
  $(".choose-game").removeClass("active");
  $(".main-game, .car-cards").addClass("active");
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

//Add reset game style function to clear the prevous game when choosing a new style of game
function resetGameStyle() {
  const cardsList = ['.farm-cards', '.space-cards', '.car-cards'].forEach(item => {
    const div = document.querySelector(item);
    div.classList.remove('active');
  })

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

// let image1 = document.getElementByClass('image1');
// let image2 = document.getElementByClass('image2');

$(".image-container").on("click", function () {
  if ($(this).children('.front').hasClass('active')) {
    $(this).children('.front').removeClass('active');
    $(this).children('.back').removeClass('active');
  } else {
    $(this).children('.front').addClass('active');
    $(this).children('.back').addClass('active');
  }
});


// document.getElementClass('image-container').addEventListener('click', function() {
//     if (image1.style.display === 'block') {
//       image1.classList.remove('active');
//       image2.classList.add('active');
//       image1.style.display = 'none';
//       image2.style.display = 'block';
//     } else {
//       image2.classList.remove('active');
//       image1.classList.add('active');
//       image1.style.display = 'block';
//       image2.style.display = 'none';
//     }
//   });