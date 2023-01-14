//appends an "active" class to .popup-instructions-overlay and .popup-instructions-content when the "instructions" button is clicked
$(".instruct-btn").on("click", function() {
    $(".popup-instruction-overlay, .popup-instruction-content").addClass("active");
  });
  
  //removes the "active" class to .popup instructions-overlay and .popup-instructions-content when the "Close" button is clicked 
  $(".close, .popup-instruction-overlay").on("click", function() {
    $(".popup-instruction-overlay, .popup-instruction-content").removeClass("active");
  });