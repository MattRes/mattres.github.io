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
let state = "menu";
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
  if (state === "menu"){
    menu();
    menuButtonClicked();
  }
  if (state === "circle")
    displayCircle()
    moveShape()
  if (state === "rectangle")
    displayRect()
    moveShape()
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
function menu(){
  background(45);
  //show rectangle button
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(40)
  fill(0);
  rect(width/2, height/2, 200, 75)
  fill(255);
  text("Rectangle", width/2, height/2 +10)

  //show circle button
  fill(0)
  rect(width/2, height/2 + 100, 200, 75)
  fill(255);
  text("Circle", width/2, height/2+ 110)

}

function menuButtonClicked(){
  if (mouseIsPressed){
    if (mouseX> width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 -175 && mouseY < height/2 + 25)
        state === "rectangle"
      //circle button
    if (mouseX> width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 -75 && mouseY < height/2 + 75)
        state === "circle"
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