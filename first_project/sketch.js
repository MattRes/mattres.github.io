// 1942 
// Matthew Resendes
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let plane;
let scaler = 1

function preload(){
  plane = loadImage("assets/1942_SmallRed_Plane.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  if (keyIsPressed){
    if (keyCode === UP_ARROW){
      scaler *= 1.1;
    }
    else if (keyCode === DOWN_ARROW){
      scaler /= 1.1; 
    }
  }

  image(plane, mouseX, mouseY, plane.width*scaler, plane.height*scaler );
  imageMode(CENTER);
  noCursor();
}
function startScreen(){
  background(0);
   
}