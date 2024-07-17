/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var BOARD_WIDTH = $("#board").width();
  var BOARD_HEIGHT = $("#board").height();
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
  }
  // Game Item Objects
  var walker = {
    "coordinateX": 0,
    "coordinateY": 0,
    "speedX": 0,
    "speedY": 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    redrawGameItem();
    repositionGameItem();
    wallCollision();
  }
  
  /* 
  Called in response to events.
  */

  function handleKeyDown(event) {
    changeSpeedX(-5, event.which, KEY.LEFT);
    changeSpeedX(5, event.which, KEY.RIGHT);
    changeSpeedY(-5, event.which, KEY.UP);
    changeSpeedY(5, event.which, KEY.DOWN);
  }

  function handleKeyUp(event) {
    changeSpeedX(0, event.which, KEY.LEFT);
    changeSpeedX(0, event.which, KEY.RIGHT);
    changeSpeedY(0, event.which, KEY.UP);
    changeSpeedY(0, event.which, KEY.DOWN);
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function changeSpeedX(newSpeed, keycode, arrowKey){
    if (keycode === arrowKey) {
      walker.speedX = newSpeed;
    }
  }

  function changeSpeedY(newSpeed, keycode, arrowKey){
    if (keycode === arrowKey) {
      walker.speedY = newSpeed;
    }
  }
  
  function repositionGameItem(){
    walker.coordinateX += walker.speedX;
    walker.coordinateY += walker.speedY;
  }

  function redrawGameItem(){
    $("#walker").css("left", walker.coordinateX);
    $("#walker").css("top", walker.coordinateY);
  }
  
  function wallCollision(){
    if(walker.coordinateX > BOARD_WIDTH - $("#walker").width()){
      walker.coordinateX = BOARD_WIDTH - $("#walker").width();
    }
    else if(walker.coordinateX < 0){
      walker.coordinateX = 0;
    }
    if(walker.coordinateY > BOARD_HEIGHT - $("#walker").height()){
      walker.coordinateY = BOARD_HEIGHT - $("#walker").height();
    }
    else if(walker.coordinateY < 0){
      walker.coordinateY = 0;
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
