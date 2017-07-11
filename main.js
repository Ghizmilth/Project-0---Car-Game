//Wait for document to be ready
$(document).ready(function () {
console.log('You can code NOW!')

var moveBox = 1;
var moveBox2 = 50;

//Detects which key has been pressed so it moves player
$(document).keydown(function(press) {
    if (press.keyCode === 39) {
    console.log('right arrow has been pressed times');
    moveBox += 1;
    moveCar1(moveBox);
    console.log(moveBox);
    } else {
      return;
    }

  });

  $(document).keydown(function(press2) {
      if (press2.keyCode === 90) {
      console.log('right arrow has been pressed times');
      moveBox2 += 1;
      moveCar2(moveBox2);
      console.log(moveBox2);
      } else {
        return;
      }

    });


});


//This function moves the player from left to right
function moveCar1(moveBox) {

  if (moveBox !== 25) {
  $('#box'+moveBox).css("background-color", "green");
  $('#box' + (moveBox-1)).css("background-color", "lightblue");
  console.log("box number " + moveBox  + " " + "has been ocupied");
} else {
  alert("Game is over");
  console.log("can't move any more");
  return;
  }

};


function moveCar2(moveBox2) {

  if (moveBox2 !== 75) {
  $('#box'+moveBox2).css("background-color", "green");
  $('#box' + (moveBox2-1)).css("background-color", "lightblue");
  console.log("box number " + moveBox2  + " " + "has been ocupied");
} else {
  alert("Game is over");
  console.log("can't move any more");
  return;
  }

};
