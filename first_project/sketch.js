// 1942 
// Matthew Resendes
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let plane;
let rocketX, rocketY;
let enemyRad; 
let enemyX, enemyY, enemyYx

function preload(){
  plane = loadImage("assets/1942_SmallRed_Plane.png");
  rocket = loadImage("assets/rocket.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enemyX = random(width);
  enemyY = 0;
  rocketY = mouseY;
  rocketX = mouseX;
}


function draw() {
  mainMenu();
  background(0);
  controls();
  enemies();

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
  textsize(25);
  textAlign(CENTER);
  text("Pilot", width/2, height/2 - 50)
  text("Start", width/2, height/2)
  
}
