// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function preload(){
  plane = loadImage("assets/1942_SmallRed_Plane.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  mainMenu()
}
function mainMenu(){
  background(45);
  textSize(55);
  textAlign(CENTER);
  fill(255, 0, 0);
  text("Pilot", width/2, height/2 - 150);
  textSize(30);
  fill(0,0,125);
  rectMode(CENTER);
  rect(width/2, height/2 + 115, 200, 55);
  fill(255, 0, 0);
  text("Start", width/2, height/2 + 125);
  fill(0,0,125);
  rect(width/2, height/2 + 190, 200, 55);
  fill(255, 0, 0);
  text("Options", width/2, height/2 + 200);
  
}
