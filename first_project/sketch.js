// Pilot inspired by 1942
// Matthew Resendes
// September 25th, 2019
// Extra for experts- I attempted to add a wav audio clip but I kept getting a P5 loadSound() not defined. I researched and put the p5 sound library in my JS folder

//Global Variables needed for the program
let screen;
let plane;
let enemyPlane;
let gameOver;
let rocketX, rocketY;

let enemyRad; 
let enemyX, enemyY, enemyYx;
let pew;
let soundOnOff;
let enemyHealth; 
let playerHealth;


function preload(){
  //Loads images in for the program
  plane = loadImage("assets/1942_SmallRed_Plane.png");
  rocket = loadImage("assets/rocket.png");
  gameOver = loadImage("assets/Gameover.jpg");
  pew = loadSound("assets/pew.wav");
  enemyPlane = loadImage("assets/enemyPlane.png");
}
function setup() {
  createCanvas(900, 600);
  enemyX = random(width - 37.5);
  enemyY = 0;
  screen = "mainMenu";
  soundOnOff = true;
}

function draw() {
  screenDisplay();
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
  if (screen === "endScreen"){
    endScreenDisplay();
  }
}

function mouseClicked() {
    // Main menu Buttons
    if (screen === "mainMenu") {
      menuButtons();
    }
    // Options menu Buttons
    else if (screen === "optionMenu") {
      optionsButtons();
    }
    else if (screen === "endScreen"){
      endScreenButtons();
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
      textSize(50);
      text("Life: "+ playerHealth, 75, 25)
      if (playerHealth <= 0){
        screen = "endScreen";
        clear();
      }
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
      pew.play();
    }
  }
}

function enemies(){
  //WIP Creates enemy (does not die or do damage yet)
  enemyRad = 25;
  enemyyx = 3;
  image(enemyPlane, enemyX, enemyY + enemyRad/2, 75,75);
  enemyY = enemyY + enemyyx; 
  if (enemyY > height){
    enemyY = 0;
    enemyX = random(width);
    playerHealth = playerHealth- 1;
  }
  console.log(mouseX, mouseY);
  }

function menuDisplay() {
  // Display for menu Screen
  noStroke();
  cursor(ARROW);
  background(45);
  fill(255, 165, 0);
  rectMode(CENTER);
  rect(width/2, height/2 + 50, 200, 75);
  rect(width/2, height/2 + 150, 200, 75);
  fill(0)
  textAlign(CENTER, TOP);
  textSize(20);
  text("Options", width/2, 440);
  text("Start", width/2, 340);
  textSize(100);
  text("Pilot", width/2, 100);
  textSize(15);
  text("Created by: Matthew Resendes", width/2 , height - 50);
  console.log(mouseX, mouseY);


}

function menuButtons() {
  // Buttons for menu screen
  if (mouseX > 350 && mouseX < 550 && mouseY > 310 && mouseY < 390) {
    screen = "game";
    playerHealth = 3;
    clear();
  }
  if (mouseX > 350 && mouseX < 550 && mouseY > 410 && mouseY < 490) {
    screen = "optionMenu";
    clear();
  }
}

function optionsDisplay() {
  // WIP Displays option choices (much more to come)
  fill(0);
  textSize(100);
  text("Options", 450, 100);
  fill(255,0,0);
  //Back button
  rectMode(CENTER);
  rect(450, 500, 100, 50);
  textSize(20)
  fill(0)
  textAlign(CENTER);
  text("Back", 450, 490);

  //Sound buttonOnOff
  fill(255,0,0);
  rect(width/2 + 35, height/2 , 50, 25);
  fill(0);
  text("Sound" , width/2 - 35, height/2 - 10);
  console.log(mouseX,mouseY);
}

function optionsButtons() {
  // WIP Buttons for options screen (much more to come)
  if (mouseX > 400 && mouseX < 500 && mouseY > 475 && mouseY < 525) {
    screen = "mainMenu";
    clear();
  }
  //Sound Button
  if (mouseX > 460 && mouseX < 510 && mouseY > 290 && mouseY < 315){
    fill(0, 255, 0);
    rect(width/2 + 35, height/2 , 50, 25);
    console.log("SoundButton");
    }
  }


function endScreenDisplay() {
  clear()
  image(gameOver, width/2, height/2, width, height);
  fill(255,0,0);
  text("Game Over", 450, 300);

  // Main menu back button
  fill(0);
  rect(width/2, height/2 + 125, 75, 30);
  fill(255);
  textSize(15);
  text("Main Menu", width/2, height/2 + 120)
  cursor(ARROW);
  console.log(mouseX, mouseY);
  }
  
  
  function endScreenButtons() {
    if (mouseX > 410 && mouseX < 490 && mouseY > 410 && mouseY < 440) {
      screen = "mainMenu";
    }
  }

