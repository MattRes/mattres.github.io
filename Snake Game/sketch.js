// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid = [];
let snake = {
  x: 0,
  y: 0
};
let snakebody = []; 

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = create2dArray(20, 20);
}

function draw() {
  background(220);
  displayGrid(grid);
}


function keyTyped() {
  if (key === "w") {
    // Move snake up
  }
  if (key === "s") {
    // Move snake down
  }
  if (key === "a") {
    //Move snake left
  }
  if (key === "d") {
    //Move snake right
  }
}


function displayGrid(theGrid) {
  //assumes the grid is a square...
  for (let y = 0; y < theGrid[0].length; y++) {
    for (let x = 0; x < theGrid[0].length; x++) {
        fill(255);
      let cellSize = width / theGrid[0].length;
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function create2dArray(cols, rows) {
  let someArray = [];
  for (let i=0; i<cols; i++) {
    someArray.push([]);
    for (let j=0; j<rows; j++) {
      if (random(100) < 50) {
        someArray[i].push(1);
      }
      else {
        someArray[i].push(0);
      }
    }
  }
  return someArray;
}

function detectEdge(){
  //Detects snake and edge
}