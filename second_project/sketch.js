// Pilot inspired by 1942
// Matthew Resendes
// September 25th, 2019
//

//Global Variables needed for the program
let screen;
let plane;
let rocketX, rocketY;
let enemyRad; 
let enemyX, enemyY, enemyYx;
let pew;

function preload(){
  //Loads images in for the program
  plane = loadImage("assets/1942_SmallRed_Plane.png");
  rocket = loadImage("assets/rocket.png");
  pew = loadSound("assets/pew.wav");
}
function setup() {
  pew.setVolume(0.1);
  pew.play();
  createCanvas(900, 600);
  enemyX = random(width);
  enemyY = 0;
  screen = "mainMenu";
}

function draw() {
  screenDisplay();
  mousePressed();
  gameLoop(); 
}

function screenDisplay() {
  //Changes screen/state
  if (screen === "mainMenu"){
    background(45)
    menuDisplay();
  }
  if (screen === "game") {
    background(45);
  }
  if (screen === "optionMenu"){
    background(45);
    optionsDisplay();
  }
}

function mousePressed() {
  if (mouseIsPressed) {
    // Main menu Buttons
    if (screen === "mainMenu") {
      menuButtons();
    }
    // Options menu Buttons
    if (screen == "optionMenu") {
      optionsButtons();
    }
  }
}

function gameLoop() {
  // Displays the Character and allowes movement controls
  if (screen === "game") {
      background(45);
      image(plane, mouseX, mouseY, 100, 100 );
      imageMode(CENTER);
      shoot();
      noCursor();
      enemies();
  }
}
function shoot(){
  //WIP Spawns rocket at front of plane (does not launch yet)
  rocketY = mouseY;
  rocketX = mouseX;
  if (keyIsPressed){
    if (key === "w"){
      image(rocket, rocketX,rocketY - 50, 60, 60);
      imageMode(CENTER);
    }
  }
}

function enemies(){
  //WIP Creates enemy (does not die or do damage yet)
  enemyRad = 25;
  enemyyx = 3;
  circle(enemyX, enemyY + enemyRad/2, enemyRad, enemyRad);
  enemyY = enemyY + enemyyx; 
}

function menuDisplay() {
  // Display for menu Screen
  background(45);
  fill(255, 165, 0);
  rectMode(CENTER);
  rect(450,350, 200, 75);
  rect(450, 450, 200, 75);
  fill(0)
  textAlign(CENTER, TOP);
  textSize(20);
  text("Options", 450, 440);
  text("Start", 450, 340);
  textSize(100);
  text("Pilot", 450, 100);
  textSize(15);
  text("Created by: Matthew Resendes", 450, 550);

}

function menuButtons() {
  // Buttons for menu screen
  if (mouseX > 350 && mouseX < 550 && mouseY > 345 && mouseY < 445) {
    screen = "game";
    clear();
  }
  if (mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 485) {
    screen = "optionMenu";
    clear();
  }
}

function optionsDisplay() {
  // Displays option choices, WIP (much more to come)
  fill(0);
  textSize(100);
  text("Options", 450, 100);
  fill(255,0,0);
  rectMode(CENTER);
  rect(450, 500, 100, 50);
  textSize(20)
  fill(0)
  textAlign(CENTER);
  text("Back", 450, 490);
  console.log(mouseX,mouseY);
}

function optionsButtons() {
  // Buttons for options screen 
  if (mouseX > 400 && mouseX < 500 && mouseY > 475 && mouseY < 525) {
    screen = "mainMenu";
    clear();
  }
}
