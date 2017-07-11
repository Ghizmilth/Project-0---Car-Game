//Wait for document to be ready
$(document).ready(function() {
  console.log('You can code NOW!')

  var moveBox = 1;
  var moveBox2 = 50;
  var finish1 = 0;
  var finish2 = 0;


  //This function moves player 1 when "Right Arrow" has been pressed
  $(document).keydown(function(press) {
    if (press.keyCode === 39) {
      console.log('right arrow has been pressed times');
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
      console.log('right arrow has been pressed times');
      moveBox2 += 1;
      moveTroll2(moveBox2);
      console.log(moveBox2);
    } else {
      return;
    }

  });


});


//This function moves "player1" from left to right
function moveTroll1(moveBox) {

  if (moveBox !== 25) {
    $('#box' + moveBox).css("background-color", "green");
    $('#box' + (moveBox - 1)).css("background-color", "lightblue");
    console.log("box number " + moveBox + " " + "has been ocupied");
  } else {
    finish1 = moveBox;
    compareWinner(finish1);
    alert("Game is over");
    console.log("can't move any more");
    return;
  }

};

//This function moves the "player2" from left to right
function moveTroll2(moveBox2) {

  if (moveBox2 !== 74) {
    $('#box' + moveBox2).css("background-color", "green");
    $('#box' + (moveBox2 - 1)).css("background-color", "lightblue");
    console.log("box number " + moveBox2 + " " + "has been ocupied");
  } else {
    finish2 = moveBox2;
    compareWinner(finish2);
    alert("Game is over");
    console.log("can't move any more");
    return;
  }

};

//function comparePlayer1(moveBox) {
//  finish1 = moveBox;
//}

//function comparePlayer2(moveBox2) {
//  finish2 = moveBox2;
//}

function compareWinner(finish1, finish2) {
  if (finish1 === 25 && finish2 === 74) {
    console.log("It's a draw");
    //alert("it's a draw");
  } else if (finish1 === 25) {
    console.log("Player 1 has won!");
    //alert("player 1 Has won");
  } else if (finish2 === 74) {
    console.log("Player 2 has won!");
    //alert("player 2 Has won");
  } else {
    return;
  }
}
