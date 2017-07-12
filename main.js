//Global variables
var finish1 = 0;
var finish2 = 0;


//Wait for document to be ready
$(document).ready(function() {
  console.log('You can code NOW!')

//popup window with instructions for the game
  var id = '#dialog';

  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //Set heigth and width to mask to fill up the whole screen
  $('#mask').css({'width':maskWidth,'height':maskHeight});

  //transition effect
  $('#mask').fadeIn(500);
  $('#mask').fadeTo("slow",0.9);

  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();

  //Set the popup window to center
  $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);

  //transition effect
  $(id).fadeIn(2000);

  //if close button is clicked
  $('.window .close').click(function (e) {
  //Cancel the link behavior
  e.preventDefault();

  $('#mask').hide();
  $('.window').hide();
  });

  //if mask is clicked
  $('#mask').click(function () {
  $(this).hide();
  $('.window').hide();
  });

  });


//The player part
  var moveBox = 1;
  var moveBox2 = 73;
  //This function moves player 1 when "Right Arrow" has been pressed
  $(document).keydown(function(press) {
    if (press.keyCode === 39) {
      console.log('right arrow has been pressed');
      moveBox += 1;
      moveTroll1(moveBox);
      console.log(moveBox);
    } else {
      return;
    }

  });

  //This function moves player 1 when "Z" key has been pressed
  $(document).keydown(function(press2) {
    if (press2.keyCode === 90) {
      console.log('right arrow has been pressed');
      moveBox2 += 1;
      moveTroll2(moveBox2);
      console.log(moveBox2);
    } else {
      return;
    }

  });


//});


//This function moves "player1" from left to right
function moveTroll1(moveBox) {

  if (moveBox !== 36) {
    $('#box' + moveBox).css("background-image","url(images/troll1.png)");
    $('#box' + (moveBox - 1)).css("background-image", "none");
    console.log("box number " + moveBox + " " + "has been ocupied");
  } else {
    finish1 = moveBox;
    compareWinner();
    alert("Game is over");
    console.log("can't move any more");
    return;
  }

};

//This function moves the "player2" from left to right
function moveTroll2(moveBox2) {

  if (moveBox2 !== 108) {
    $('#box' + moveBox2).css("background-image", "url(images/trumenium.png)");
    $('#box' + (moveBox2 - 1)).css("background-image", "none");
    console.log("box number " + moveBox2 + " " + "has been ocupied");
  } else {
    finish2 = moveBox2;
    compareWinner();
    alert("Game is over");
    console.log("can't move any more");
    return;
  }

};

//This function compares who the winner of the game is
function compareWinner() {
  if (finish1 === 36 && finish2 === 108) {
    console.log("It's a draw");
    //alert("it's a draw");
  } else if (finish1 === 36) {
    console.log("Player 1 has won!");
    //alert("player 1 Has won");
  } else if (finish2 === 108) {
    console.log("Player 2 has won!");
    //alert("player 2 Has won");
  } else {
    return;
  }
};


//This function calls a modal box to declare the winner
