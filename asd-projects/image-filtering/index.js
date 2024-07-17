// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let a = 0; a < image[i].length; a++) {
      let rgbString = image[i][a];
      //2b
      let rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      image[i][a] = rgbStringToArray(rgbNumbers);
    }
  }
};

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  let noBackground = image[0];
  for (let i = 0; i < image.length; i++) {
    for (let a = 0; a < image[i].length; a++) {
      let rgbString = image[i][a];
      //2b
      let rgbNumbers = rgbStringToArray(rgbString);
      //7C
      if (rgbString !== noBackground) {
        filterFunction(rgbNumbers);
        image[i][a] = rgbStringToArray(rgbNumbers);
      }
    }
  }
};

// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
  num = Math.max(num, 0);
  num = Math.min(num, 255);
  return num;
}
// console.log(keepInBounds(-30)); // should print 0 // works!
// console.log(keepInBounds(300)); // should print 255 // works!
// console.log(keepInBounds(127)); // should print 127 // works!
// TODO 3: Create reddify function
function reddify(optionA) {
  optionA[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(optionB) {
  optionB[BLUE] = keepInBounds(optionB[BLUE] - 50);
}
function increaseGreenByBlue(optionC) {
  optionC[GREEN] = keepInBounds(optionC[BLUE] + optionC[GREEN]);
}
// CHALLENGE code goes below here
