// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid = [];
let snakeHead = {
  x: 10,
  y: 10
};
let snakebody = []; 
let xCoord;
let yCoord;
let cellSize;
let fruit;
let score;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = create2dArray(21, 21);
  cellSize = width / grid[0].length;

}

function draw() {
  background(220);
  displayGrid(grid);
  fill(125,125,124);
  console.log(xCoord, yCoord);
  updateFruit();
}


function keyTyped() {
  if (key === "w") {
    //Move snake up
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
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      fill(125,125,125);
      xCoord = floor(mouseX / cellSize);
      yCoord = floor(mouseY / cellSize);
    }
  }
  rect(10 * cellSize, 10 * cellSize, cellSize, cellSize);
  fill(0);
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
  //Display Score and game over
}

function updateFruit(){
  let randomGridVal = 0;
  fill(0);
  rect(theGrid[10],theGrid[10], cellSize, cellSize);
  console.log("ran");
}