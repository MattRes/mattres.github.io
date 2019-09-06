// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redamount = 0;
let greenamount = 0;
let redchangeamount = 1;
let greenchangeamount = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(redamount, greenamount, 255);
  noStroke()
  ellipse(mouseX, mouseY, 100, 100);

  redamount += redchangeamount;

  if (redamount >= 255){
    redchangeamount *= -1;
    greenchangeamount *= -2;
  }
  if (redamount <= 0) {
    redchangeamount *= -1;
    greenchangeamount *= -2;
  }
  console.log(redamount);
}

