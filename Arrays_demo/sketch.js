// Arrays object Demo
//
//
//

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  for (let i =0; i < shapes.length; i++){
    shapes[i].y += shapes[i].dy;
    fill(shapes[i].color);
    ellipse(shapes[i].x, shapes[i].y, shapes[i].radius*2, shapes[i].radius*2)
  if (shapes.length >= 10){
    shapes.shift();
  }
}
}

function mousePressed(){
  let someShape = {
    x: mouseX,
    y: mouseY,
    radius: random(10, 45),
    color: color(random(255), random(255), random(255), random(255)),
    dy: 5
  };
  shapes.push(someShape);

  }

