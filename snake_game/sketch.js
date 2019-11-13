//Snake Game
//Matthew Resendes
// I was unable to get the snake to grow upon collecting a fruit, I spent roughly 3 and half hours
// attempting to get it working but just couldn't.

let grid;
let rows = 60;
let cols = 60;
let snake = {
  x: 15,
  y: 15,
  total: 0,
  tail: []
};
let fruit = {};
let direction;
let fr = 22.5;
let score = 0;

function setup() {
  //sets frame rate
  frameRate(fr);

  fruit = {
    x: floor(random(0, rows)),
    y: floor(random(0, cols))
  };
  // creates window size to max number of rows or columns
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  //creates empty grid and sets colors for snake and fruit aswell as makes first fruit
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
  // updates window if it's resized
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}


function keyPressed() {
  // changes direction variable depending on key press
  if (key === "w" || keyCode === UP_ARROW) {
    direction = "up";

  }
  if (key === "s" || keyCode === DOWN_ARROW) {
    direction = "down";
  }

  if (key === "d" || keyCode === RIGHT_ARROW) {
    direction = "right";
  }

  if (key === "a" || keyCode === LEFT_ARROW) {
    direction = "left";
  }
}


function createEmptyGrid() {
  //creates an empty grid
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
  //displays square grid
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
  text("Score: " + snake.total, 10,25)
}


function update(){
  let thisSegment = {
    x: snake.x,
    y: snake.y, 
    size: width / cols
  };

  if (grid[fruit.x][fruit.y] === grid[snake.x][snake.y]){
    // if snake XY is the same as fruit XY spawn new fruit add to score and snake total
    fruit.x = floor(random(0, cols));
    fruit.y = floor(random(0, rows));
    grid[fruit.x][fruit.y] = 2;
    grid[fruit.x][fruit.y];
    snake.total++;
    snake.tail.push(thisSegment); 
    //console.log(thisSegment);

    // Below was me trying to get it to add on a snake tail (unsucessful)

    // for (let i = 0; i <snake.total-1; i++) {
    //   snake.tail[i] = snake.tail[i+1];
    // }
    // snake.tail[snake.total - 1] = grid[snake.x][snake.y]
    // grid[snake.tail[i]][snake.tail[i]]
  }
};


function updateMovement(){
  //takes snake out of grid
  grid[snake.x][snake.y] = 0;

  //directional movement
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
  //puts snake back into grid
  grid[snake.x][snake.y] = 1;

  if (direction === "up"){
    direction != "down";
  }
  if (direction === "down"){
    direction != "up";
  }
};
