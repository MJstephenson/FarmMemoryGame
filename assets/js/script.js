//Appends an "active" class to .popup-instructions-overlay and .popup-instructions-content when the "instructions" button is clicked
$(".instruct-btn").on("click", function() {
    $(".popup-instruction-overlay, .popup-instruction-content").addClass("active");
  });
  
  //Removes the "active" class to .popup instructions-overlay and .popup-instructions-content when the "Close" button is clicked 
  $(".close-modal-btn").on("click", function() {
    $(".popup-instruction-overlay, .popup-instruction-content").removeClass("active");
  });

  //Appends an "active class to .choose-game when the "start" button is pressed and hides the begin section from the DOM
  $("#start-button").on("click", function() {
    $(".choose-game").addClass("active");
    $(".begin-section").addClass("inactive");
  });

  //
  $("#farm-btn").on("click", function() {
    $(".header-text, .instructions").addClass("inactive");
    $(".choose-game").removeClass("active");
    $(".main-game").addClass("active");
  });