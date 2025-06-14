$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    //Loop to create vertical grid lines
    ///for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    //A step
    createPlatform(200, 630, 80, 10);
    //B step
    createPlatform(300, 530, 80, 10);
    //C step
    createPlatform(400, 430, 80, 10);
    //D platform with walls
    createPlatform(500, 330, 210, 10);
    createPlatform(560, 230, 10, 100);
    createPlatform(640, 230, 10, 100);
    //E left long platform
    createPlatform(0, 330, 300, 10);
    //F step 2 side platform
    createPlatform(30, 530, 100, 10);
    //G platform right of database collectable
    createPlatform(900, 330, 100, 10);
    //H platform top to bottom 1
    createPlatform(1000, 430, 100, 10);
    //I platform top to bottom 2
    createPlatform(1100, 530, 100, 10);
    //J platform bottom right last coll
    createPlatform(1200, 630, 200, 10);
    //K platform wall bottom right
    createPlatform(1320, 530, 10, 100);


    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("butterflyA", 585, 290);
    createCollectable("coin", 60, 450, 10, 0.5);
    createCollectable("coin",1350,590);


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("top", 580, 2000);
    createCannon("top", 750, 2000);
    createCannon("bottom",100,1000);



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
