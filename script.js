// setup sound effect for correct answers
var audioCorrect = new Audio('../correct.m4a');
audioCorrect.loop = false;

// setup sound effect for wrong answers
var audioWrong = new Audio('../wrong.m4a');
audioWrong.loop = false;

// reveal the correct answer and play sound effect on click 
$('.answer').on('click', function(e) {
  $(this).toggleClass("reveal");
  audioCorrect.play();
});

// keyboard shortcuts
$(document).on('keypress',function(e) {

// navigation between questions
  if ( e.ctrlKey && ( e.which === 49 ) ) {
    window.location.href = "question-1.html";
  }

  if ( e.ctrlKey && ( e.which === 50 ) ) {
    window.location.href = "question-2.html";
  }

  if ( e.ctrlKey && ( e.which === 51 ) ) {
    window.location.href = "question-3.html";
  }

  if ( e.ctrlKey && ( e.which === 52 ) ) {
    window.location.href = "question-4.html";
  }

  if ( e.ctrlKey && ( e.which === 53 ) ) {
    window.location.href = "question-5.html";
  }

  if ( e.ctrlKey && ( e.which === 54 ) ) {
    window.location.href = "question-6.html";
  }

// play sound effect and flash X for wrong answer
  if(e.which == 32) {
    audioWrong.play();
    $(".wrong").animate({opacity:1},100).delay(100).animate({opacity:0},100)
  }

// reveal correct answers and play sound effect
  if(!e.ctrlKey && e.which == 49) {
    $(".answer:first-child").click();
  }

  if(!e.ctrlKey && e.which == 50) {
    $(".answer:nth-child(2)").click();
  }

  if(!e.ctrlKey && e.which == 51) {
    $(".answer:nth-child(3)").click();
  }

  if(!e.ctrlKey && e.which == 52) {
    $(".answer:nth-child(4)").click();
  }

  if(!e.ctrlKey && e.which == 53) {
    $(".answer:nth-child(5)").click();
  }

  if(!e.ctrlKey && e.which == 54) {
    $(".answer:nth-child(6)").click();
  }

  if(!e.ctrlKey && e.which == 55) {
    $(".answer:nth-child(7)").click();
  }
});


