// 1942 
// Matthew Resendes
// 25th September 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Important global variables
let plane;
let rocketX, rocketY;
let enemyRad; 
let enemyX, enemyY, enemyYx
let screen;

//Loads images in for use
function preload(){
  plane = loadImage("assets/1942_SmallRed_Plane.png");
  rocket = loadImage("assets/rocket.png");
}

// Sets everything up for the program
function setup() {
  createCanvas(windowWidth, windowHeight);
  enemyX = random(width);
  enemyY = 0;
  rocketY = mouseY;
  rocketX = mouseX;
  screen = mainMenu;
}

//Main Loop
function draw() {
  screenDisplay()
  background(0);
  controls();
  enemies();
  console.log(mouseX, mouseY);
}

function screenDisplay() {
  if (screen === "mainMenu"){
    background(45)
    titleDisplay();
  }
  if (screen === "game") {
    background(45);
  }
  if (screen === "options"){
    background(45);
    optionsDisplay();
  }
}
function menuButtons() {
  // Buttons for title screen
  if (mouseX > 650 && mouseX < 950 && mouseY > 345 && mouseY < 445) {
    screen = "game";
    clear();
  }
  if (mouseX > 650 && mouseX < 950 && mouseY > 475 && mouseY < 575) {
    screen = "options";
    clear();
  }
}


// Main controls for the plane 
function controls(){
  image(plane, mouseX, mouseY, 100, 100 );
  imageMode(CENTER);
  shoot();
  noCursor();
}

//Main shooting function
function shoot(){
  if (keyIsPressed){
    if (key === "w"){
      image(rocket, rocketX, rocketY - 40, 60, 60);
      imageMode(CENTER);
      console.log("Shot");
    }
  }
}
//Spawns enemies at Y axis (0) and moves them downwards to plane
function enemies(){
  enemyrad = 25;
  enemyyx = 3;
  circle(enemyX, enemyY + enemyRad/2, enemyrad, enemyrad);
  enemyY = enemyY + enemyyx; 
  if (enemyY > abs(height)){

  }
}
//Creates Main Menu
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
function options(){
  clear()
}