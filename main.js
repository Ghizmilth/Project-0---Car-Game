//Wait for document to be ready
$(document).ready(function () {
console.log('You can code NOW!')


//Detects which key has been pressed so it moves player
$(document).keydown(function(press) {
    if (press.keyCode === 39) {
      //move(keyCode);
      console.log('right arrow has been pressed');
    } else {
      return;
    }

})



});


//This function moves the player from left to right
//function move() {
  //var square = $('#slot1')
  //for (var i = 0; i < 24; i++)
//}
