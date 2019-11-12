// Walker demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let george;
let jenna;

function setup() {
  createCanvas(windowWidth, windowHeight);
  george = new Walker(width/2,height/2);
  jenna = new Walker(100,200);
}

function draw() {
  jenna.display();
  jenna.move();
  george.display();
  george.move();
}

class Walker{
  constructor(x,y){
    this.x = x
    this.y = y
    this.fillColor = color(random(255),random(255),random(255));
    this.stepSize = 6;
    this.radius = 3;
  }
  display(){
    fill(this.fillColor);
    noStroke()
    circle(this.x,this.y, this.radius*2)
  }
  move(){
    let choice = random(100);
  if (choice < 25){
    this.y -= this.stepSize;
      }
  else if (choice < 50){
    this.y += this.stepSize;
  }
  else if (choice < 75){
    this.x -= this.stepSize;
  }
  else if (choice <= 100){
    this.x += this.stepSize;
  }

}
}
