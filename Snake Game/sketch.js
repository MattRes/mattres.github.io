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
let snake = {
  x: 15,
  y: 15
};
let snakeBody = [];
let fruit = {};
let direction;
let fr = 22.5;
let score = 0;

function setup() {
  frameRate(fr);
  fruit = {
    x: floor(random(0, rows)),
    y: floor(random(0, cols))
  };
  snakeBody.push(snake)

  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid(cols, rows);
  grid[snake.x][snake.y] = 1;
  grid[fruit.x][fruit.y] = 2;
  grid[fruit.x][fruit.y];
}


function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  update();
  updateMovement();
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
  if (key === "w" || keyCode === UP_ARROW) {
    direction = "up";
    //snakeY -= 1;
  }
  if (key === "s" || keyCode === DOWN_ARROW) {
    direction = "down";
    //snakeY += 1;
  }

  if (key === "d" || keyCode === RIGHT_ARROW) {
    direction = "right";
    //snakeX += 1;
  }

  if (key === "a" || keyCode === LEFT_ARROW) {
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
  fill(255,0,0, 75)
  textSize(24);
  text("Score: " + score, 10,25)
}


function update(){
  let newSeg;
  let thisSegment = {
    x: snake.x,
    y: snake.y, 
    size: width / cols
  };
  if (grid[fruit.x][fruit.y] === grid[snake.x][snake.y]){
    fruit.x = floor(random(0, 30));
    fruit.y = floor(random(0, 30));
    grid[fruit.x][fruit.y] = 2;
    grid[fruit.x][fruit.y];
    score ++;
    newSeg = snakeBody.unshift
    console.log(newSeg);
    snakeBody.push(thisSegment); 

  }
};




function updateMovement(){
  grid[snake.x][snake.y] = 0;
  if (direction === "up" && snake.y > 0){
    snake.y -= 1;
    }
  if (direction === "down" && snake.y < rows - 1){
    snake.y += 1;      
    }
  if (direction === "left" && snake.x > 0){
    snake.x -= 1;
    }
  if (direction === "right" && snake.x < cols - 1){  
    snake.x += +1;
    }
  grid[snake.x][snake.y] = 1;
  if (direction === "up"){
    direction != "down";
  }
  if (direction === "down"){
    direction != "up";
  }
};
