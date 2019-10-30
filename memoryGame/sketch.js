// Memory Game Demo
// Oct 30, 2019

let grid; //Display Grid
let completedGrid;  // Answer key grid
let rows = 4;
let cols = 4;
let currentlySelectedCells = []; //Click array (whats currently clicked)
const EMPTY = 255; //Always display white as default
let currentlyAnimating = false; //Allows control of display
let state = "gameplay";

function setup() { // built so grid scales to largest width or height
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  completedGrid = createCompletedGrid();
  grid = createEmptyGrid(cols, rows);
}

function draw() {
  background(220);
  if (state === "gameplay") {
    displayGrid(grid, rows, cols);
  }
  else if (state === "win") {
    winScreen();
  }
}

function createCompletedGrid() {
  let colorList = ["blue", "red", "green", "yellow", "orange", "black", "purple", "brown"];
  let pairs = [];
  for (let thisColor of colorList) {// Ensures theres two colors of each
    pairs.push(thisColor);
    pairs.push(thisColor);
  }
  shuffle(pairs, true); //change the value of pairs to be randomized

  let completedGrid = createEmptyGrid(cols, rows);
  //assign each color to a location
  let x = 0;
  let y = 0;
  for (let i = 0; i < pairs.length; i++) {
    completedGrid[y][x] = pairs[i];
    x++;
    if (x === cols) {
      y++;
      x = 0;
    }
  }
  return completedGrid;
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function mousePressed() {
  if (!currentlyAnimating) {// doesn't register additional clicks
    let cellSize = width/cols;

    let xCoord = floor(mouseX / cellSize);//Find where you clicked (x val)
    let yCoord = floor(mouseY / cellSize);//Find where you clicked (y val)
    
    if (currentlySelectedCells.length < 2 && grid[yCoord][xCoord] === EMPTY) {
      grid[yCoord][xCoord] = completedGrid[yCoord][xCoord];
      let thisCell = {
        x: xCoord,
        y: yCoord
      };
      currentlySelectedCells.push(thisCell);
    }
    if (currentlySelectedCells.length === 2) {
      //is it a pair?
      let firstColor = completedGrid[currentlySelectedCells[0].y][currentlySelectedCells[0].x];
      let secondColor = completedGrid[currentlySelectedCells[1].y][currentlySelectedCells[1].x];
      if (firstColor === secondColor) {
        //update grid to contain this pair
        //grid[currentlySelectedCells[0].y][currentlySelectedCells[0].x] = completedGrid[currentlySelectedCells[0].y][currentlySelectedCells[0].x];
        //grid[currentlySelectedCells[1].y][currentlySelectedCells[1].x] = completedGrid[currentlySelectedCells[1].y][currentlySelectedCells[1].x];
        currentlySelectedCells = [];
        if (gameIsWon()) {
          state = "win";
        }
      }
      else {
        //reset grid to remove whatever was chosen
        currentlyAnimating = true;
        window.setTimeout(animateWrongPair, 1000);
      }  
    }
  }
}

function animateWrongPair() {
  grid[currentlySelectedCells[0].y][currentlySelectedCells[0].x] = EMPTY;
  grid[currentlySelectedCells[1].y][currentlySelectedCells[1].x] = EMPTY;
  
  currentlySelectedCells = [];
  currentlyAnimating = false;
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(EMPTY);
    }
  }
  return emptyGrid;
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(grid[y][x]);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function gameIsWon() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {  
      if (grid[i][j] !== completedGrid[i][j]) {
        // at least one thing is different
        return false;
      }
    }
  }
  // can only get here if all items in the array are the same
  return true;
}

function winScreen() {
  background(255);
  fill(0);
  textSize(85);
  textAlign(CENTER, CENTER);
  text("YOU WIN!", width/2, height/2);
}