// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// WASD in Grid Demo

let grid;
let rows = 30;
let cols = 30;
let snakeX = 15;
let snakeY = 15;
let fruit = {};
let direction;

function setup() {
  fruit = {
    x: floor(random(0, 30)),
    y: floor(random(0, 30))
  };
  
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid(cols, rows);
  grid[snakeX][snakeY] = 1;
  grid[fruit.x][fruit.y] = 2;
  grid[fruit.x][fruit.y];
}


function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  updatefruit();
  //updateMovement();
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}
function keyPressed() {
  // remove player from current spot
  grid[snakeX][snakeY] = 0;

  // move the player
  if (key === "w" && snakeY > 0) {
    snakeY -=1
    direction = "up";
  }
  if (key === "s" && snakeY < rows - 1) {
    direction = "down";
    snakeY +=1;
  }

  if (key === "d" && snakeX < cols - 1) {
    direction = "right";
    snakeX += 1
  }

  if (key === "a" && snakeX > 0) {
    direction = "left";
    snakeX -= 1
  }
  // put player back into grid
  grid[snakeX][snakeY] = 1;
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else if (grid[x][y] === 2){
        fill(255,0,0);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function updatefruit(){
  if (grid[fruit.x][fruit.y] === grid[snakeX][snakeY]){
    fruit.x = floor(random(0, 30));
    fruit.y = floor(random(0, 30));
    grid[fruit.x][fruit.y] = 2;
    grid[fruit.x][fruit.y];
    console.log(fruit.x, fruit.y);
    console.log(direction);
  }
};

function updateMovement(){
    if (direction === "up"){
        snakeY -= 1;
    }
    if (direction === "down"){
        snakeY += 1;
    }
    if (direction === "left"){
        snakeX -= 1;
    }
    if (direction === "right"){
        snakeX += 1;
    }
};
