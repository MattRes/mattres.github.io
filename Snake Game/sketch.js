// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// WASD in Grid Demo

let grid;
let rows = 60;
let cols = 60;
let snakeX = 15;
let snakeY = 15;
let snake = [];
let fruit = {};
let direction;

function setup() {
  fruit = {
    x: floor(random(0, rows)),
    y: floor(random(0, cols))
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
  updateMovement();
  console.log(fruit.x, fruit.y);
  console.log(direction);
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
  if (key === "w") {
    direction = "up";
    //snakeY -= 1;
  }
  if (key === "s") {
    direction = "down";
    //snakeY += 1;
  }

  if (key === "d") {
    direction = "right";
    //snakeX += 1;
  }

  if (key === "a" && snakeX > 0) {
    direction = "left";
    //snakeX -= 1;
  }
  // put player back into grid
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
      strokeWeight(0.5);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function updatefruit(){
  let thisSegement = {
    x: snakeX,
    y: snakeY, 
    size: width / cols
  };
  if (grid[fruit.x][fruit.y] === grid[snakeX][snakeY]){
    fruit.x = floor(random(0, 30));
    fruit.y = floor(random(0, 30));
    grid[fruit.x][fruit.y] = 2;
    grid[fruit.x][fruit.y];
    //if W pushed it'll fire a rocket
    snake.push(thisSegement); 

  }
};




function updateMovement(){
  grid[snakeX][snakeY] = 0;
  if (direction === "up" && snakeY > 0){
    snakeY -= 1;
    }
  if (direction === "down" && snakeY < rows - 1){
    snakeY += 1;      
    }
  if (direction === "left" && snakeX > 0){
    snakeX -= 1;
    }
  if (direction === "right" && snakeX < cols - 1){  
    snakeX += +1;
    }
  grid[snakeX][snakeY] = 1;
};
