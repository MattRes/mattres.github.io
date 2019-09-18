// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x;
let y;
let radius = 100;
let rectsize = 100; 
let mode = "rectangle";
let dx;
let yx;

function preload(){
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  dx = random(-15,15);
  yx = random(-15,15);
  x = width/2;
  y = height/2;
}

function draw() {
  background(0);
  fill(255)
  noStroke()
  moveShape()
  if (mode === "circle")
    displayCircle()
  if (mode === "rectangle")
    displayRect()
 
}

function windowResized(){
  setup()
}

function moveShape(){
  x += dx;
  y += yx;
}

function displayCircle(){
  circle(x,y, radius)
  if (x > width - radius/2|| x < 0 + radius/2){
    dx*= -1;
  }
  if (y > height - radius/2|| y < 0 + radius/2){
    yx*= -1;
  }
}
function displayRect(){
    rect(x, y, rectsize, rectsize);
    if (x > width - rectsize|| x < 0 + rectsize/2){
      dx*= -1;
    }
    if (y > height - rectsize|| y < 0){
      yx*= -1;
    }
  }