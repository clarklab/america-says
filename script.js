$('.answer').on('click', function(e) {
  $(this).toggleClass("reveal");
});

function playCorrect() {
  var audio = new Audio('../correct.m4a');
  audio.play();
}

function playWrong() {
  var audio = new Audio('../wrong.m4a');
  audio.play();
}


$('.answer').click(function() {
  playCorrect();
});


$(document).on('keypress',function(e) {

  if ( e.ctrlKey && ( e.which === 49 ) ) {
    window.location.href = "question-1.html";
  }

  if ( e.ctrlKey && ( e.which === 50 ) ) {
    window.location.href = "question-2.html";
  }

  if ( e.ctrlKey && ( e.which === 51 ) ) {
    window.location.href = "question-3.html";
  }

    if(e.which == 32) {
      playWrong();
      $(".wrong").animate({opacity:1},100).delay(100).animate({opacity:0},100)
    }

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


