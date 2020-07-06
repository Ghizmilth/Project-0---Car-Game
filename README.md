# Project-0---Troll Race
Troll game to play between 2 players on the same screen.


### User Stories & Game Mechanics
1. A user will be able to see a set of instructions that will explain the basics of the game.
2. A user will be able to see screen that shows trolls on screen and ready to play.
3. User will be able to to move on the screen from Left to Right.
4. The user wins once one of the players make it to the right side of the screen.
5. There is a draw, if both trolls get to the finish line at the same time.

### Data Structures for "Race Game"
Let's consider object types Troll, Screen, Position, Finishline


### User Stories

1. A user will be able to see a set of instructions that will explain the basics of the game.
  a. Create an HTML structure to display text on the screen on its own
  b. Text will disappear after pressing ENTER on the keyboard
  c. Make sure that the game is not displayed yet


2. A user will be able to see screen that shows trolls on screen and ready to play.
  a. an HTML structure where cars will be showing in the center of the screen to the left side of it
  b. an HTML structure that will show a background image according to the selection of the route on the previous screen.


3. User will be able to to move on the screen from Left to Right.
    - Add an event listener to know when `troll1` has pressed a key of the keyboard to make a movement. These key is Right Arrow.
    - Add an event listener  to know when `troll2` has made a move with the "Z" key.
    - .keydown() jquery will be used to

4. The user wins once one of the players make it to the finish line first.
  a. create a `compareWinner` function that will allow us to recognize the following scenarios:
    - `troll1` or `troll2` win:
      .This happens if one of them reaches the end of the route first.
    - `compareWinner` if both players arrived at the same time, if so, read step 7.
    - Once the winner is confirmed, the screen stops and shows a winner animated text

5. There is a draw, if both trolls get to the finish line at the same time.
  - if `compareWinner` comes back with `true` answer then there is a draw
  - The draw will be shown on the screen saying that there is no winner



### Potential Challenges /Development Questions

1. How to create different routes and block the extra areas so players don't get out of track.
2. How to make sure when a draw is actually a draw when players are at the finish line.
3. How to make the screen stop once the players have reached the right side.
