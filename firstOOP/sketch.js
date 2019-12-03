// OOP Particle

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = theFireworks.length-1 ; i >= 0; i--) {
    theFireworks[i].move();
    if (theFireworks[i].isDone()){
      theFireworks.splice(i,1);
    }
    else {
      theFireworks[i].display();
    }
  }

  // If you want to spam the screen when holding down the mouse, use this...

  // if (mouseIsPressed) {
  //   let myParticle = new Particle(mouseX, mouseY, random(-3,3), random(-3, 3), 10);
  //   theParticles.push(myParticle);
  // }

}

function mousePressed() {
  for (let i = 0; i >100; i++){
    let myFirework = new Particle(mouseX, mouseY, random(-3,3), random(-3, 3), 10);
    theFireworks.push(myFirework);
  }
}

class Particle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.alpha = 255
    this.gravity = 0.05;
    //this.color = fill(random(0,255),random(0,255),random(0,255))
  }
  display() {
    fill(255,0,0,this.alpha);
    circle(this.x, this.y, this.radius * 2);
  }
}
//   move() {
//     this.x += this.dx;
//     this.y += this.dy;
//     this.alpha -= 1;
//     this.dy += this.gravity;
//   }
//   isDone(){
//     return this.alpha <= 0;
//   }