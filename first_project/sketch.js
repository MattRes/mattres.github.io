// Pilot inspired by 1942
// Matthew Resendes
// September 25th, 2019
// Extra for experts- I attempted to add a wav audio clip but I kept getting a P5 loadSound() not defined. I researched and put the p5 sound library in my JS folder

//Global Variables needed for the program
let screen;
let plane;

let gameOver;
let rocketX, rocketY;
let rockets = [];
let enemy = {
  x: 0,
  y: 0,
  yx: 0,
  rad: 0,
  plane:0
}
let pew;
let soundOnOff;
let enemyHealth; 
let playerHealth;
let mainBackground;


function preload(){
  //Loads images in for the program
  plane = loadImage("assets/1942_SmallRed_Plane.png");
  rocket = loadImage("assets/rocket.png");
  gameOver = loadImage("assets/Gameover.jpg");
  pew = loadSound("assets/pew.wav");
  enemy.plane = loadImage("assets/enemyPlane.png");
}
function setup() {
  createCanvas(900, 600);
  mainBackground = 45;
  enemy.x = random(width - 37.5);
  enemy.y = 0;
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
    background(mainBackground);
    menuDisplay();
  }
  if (screen === "game") {
    background(mainBackground);
  }
  if (screen === "optionMenu"){
    background(mainBackground);
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
      updateLife();
      updateRockets();
      if (playerHealth <= 0){
        screen = "endScreen";
        clear();
      }
  }
}

function updateLife(){
  textSize(50);
  fill(0, 255,0);
  if (playerHealth === 3){
    fill(0,255,0);
    text("Life: "+ playerHealth, 75, 25);
  }
  if (playerHealth === 2){
    fill(255,165,0)
    text("Life: "+ playerHealth, 75, 25);
  }
  else if (playerHealth === 1){
    fill(255,0,0);
    text("Life: "+ playerHealth, 75, 25);
  }
}


function shoot(){
  //WIP Spawns rocket at front of plane (Finally launches!)
  let thisRocket = {
    y: mouseY,
    x: mouseX, 
    width: 70,
    height: 90,
    speed: 5
  };
  //if W pushed it'll fire a rocket
  //MILLIS DOESN'T WORK!!!!!!!
  if (keyIsPressed){
    if (key === "w"){
      imageMode(CENTER);
      pew.play();
      rockets.push(thisRocket); 
    }
  }
}

function updateRockets(){
  //Updates rockets in the array
  for (let thisRocket of rockets){
    thisRocket.y += thisRocket.speed * -1;
    image(rocket, thisRocket.x, thisRocket.y, thisRocket.width, thisRocket.height);
  if (rockets.length >= 10){
    rockets.shift();
  }
}
}

function enemies(){
  //WIP Creates enemy (does not die or do damage yet)
  enemy.rad = 25;
  enemy.yx = 3;
  image(enemy.plane, enemy.x, enemy.y + enemy.rad/2, 75,75);
  enemy.y = enemy.y + enemy.yx; 
  if (enemy.y > height){
    enemy.y = 0;
    enemy.x = random(width - 37.5);
    playerHealth = playerHealth- 1;
  }
  console.log(mouseX, mouseY);
  }

function menuDisplay() {
  // Display for menu Screen
  noStroke();
  cursor(ARROW);
  background(mainBackground);
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

function characterSelectDisplay(){
  let size = 150
  background(mainBackground);
  rectMode(CENTER);
  //top left square
  rect(width/4, height/3, size, size)
  //top right square
  rect(width - width/4, height/3, size, size)
  //bot right square
  rect(width - width/4, height - height/3, size, size)
  //bot left square
  rect(width/4, height - height/3, size, size)
  //top mid square
  rect(width/2, height/3, size, size)
  //bot mid square
  rect(width/2, height - height/3, size, size)
}

function characterSelectButtons(){

}

function optionsDisplay() {
  // WIP Displays option choices (much more to come)
  soundOnOff = "On";
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
  fill(0);
  text("Sound" , width/2 - 35, height/2 - 10);
  if (soundOnOff === "On")
    fill(255,0,0);
  else if (soundOnOff === "off")
  rect(width/2 + 35, height/2 , 50, 25);
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
    //Main menu return button
    if (mouseX > 410 && mouseX < 490 && mouseY > 410 && mouseY < 440) {
      screen = "mainMenu";
    }
  }

