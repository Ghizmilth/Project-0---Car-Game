# Project-0---Car-Game
Car game to play between 2 players on the same screen.


### User Stories & Game Mechanics
1. A user will be able to see a set of instructions that will explain the basics of the game.
2. A user will be able to select the car to play with.
3. A user will be able to select the route that will be played.
4. Once the players have selected car and route, screen shows cars on screen and ready to play.
5. User will be able to to move on the screen Up, Down, Left or Right.
6. The user wins once one of the players make it to the finish line first.
7. There is a draw, if both cars get to the finish line at the same time.
8. There is a reset button to clear screen and start the game all over again

### Data Structures for "Car Game"
Let's consider object types Car, Route, Screen, Position, Finishline


###User Stories

1. A user will be able to see a set of instructions that will explain the basics of the game.
  a. Create an HTML structure to display text on the screen on its own
  b. Text will disappear after pressing ENTER on the keyboard
  c. Make sure that the game is not displayed yet


2. A user will be able to select the car to play with.
  a. Shows images on the screen with car selections organized from left to right
    - Add an event listener `carSelect` to know when a player selects a car on the screen
  b. Save the selection on `carSelect` of each of the players on their respective variables `player1` `player2`.  

3. A user will be able to select the route that will be played.

  a. Shows which route `routeSelect` to play on the screen and players have to follow it (to be added once the basic of the game is running)
  b. Add an event listener to know when players make a selection and make sure to display it.

4. Once the players have selected car and route, screen shows cars on screen and ready to play.
  a. an HTML structure where cars will be showing in the center of the screen to the left side of it
  b. an HTML structure that will show a background image according to the selection of the route on the previous screen.


5. User will be able to to move on the screen Up, Down, Left or Right.
  a. Depending on the `routeSelect` of the player, it will include movements that will be up, down, left or right.
    - Add an event listener to know when `player1` has pressed a key of the keyboard to make a movement. These keys are `z, x, c and s` are pressed. They represent "Left, Down, Right and Up" respectively.
    - Add an event listener  to know when `player2` has made a move with the arrow keys.
    - .keyup() jquery will be used to

6. The user wins once one of the players make it to the finish line first.
  a. create a `win` function that will allow us to recognize the following scenarios:
    - `player1` or `player2` win:
      .This happens if one of them reaches the end of the route first.
    - `Compare` if both players arrived at the same time, if so, read step 7.
    - Once the winner is confirmed, the screen stops and shows a winner image that we can use by using `congratulations` as a variable or function to trigger it with.

7. There is a draw, if both cars get to the finish line at the same time.
  - if `compare` comes back with `true` answer then there is a draw
  - The draw will be shown on the screen saying that there is no winner

8. There is a reset button to clear screen and start the game all over again.
  - Place a reset button after `congratulations` or `draw` to reset the game, it will bring the game to its start.


###Potential Challenges /Development Questions

1. How to create different routes and block the extra areas so players don't get out of track.
2. How to make sure when a draw is actually a draw when players are at the finish line.
3. 
