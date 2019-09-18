// 1942 
// Matthew Resendes
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let plane;
let rocket;
let rocketY;
let w;
let s;
function preload(){
  plane = loadImage("assets/1942_SmallRed_Plane.png");
  rocket = loadImage("assets/rocket.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  controls()

}

function controls(){
  image(plane, mouseX, mouseY, 100, 100 );
  imageMode(CENTER);
  shoot();
  noCursor();

}

function shoot(){
  if (keyIsPressed){
    if (key === "w"){
      image(rocket, pmouseX, pmouseY - 40, 60, 60);
      imageMode(CENTER);
      console.log("Shot");
      
    }
  }
}
