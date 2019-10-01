// Pilot inspired by 1942
// Matthew Resendes
// September 25th, 2019
//

//Global Variables needed for the program
let plane;
let filteredImage;

function preload(){
  plane = loadImage("assets/plane.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  filteredImage = imageProcessor(plane);
}

function draw() {
  background(220);
  image(filteredImage, 0, 0);
}

function imageProcessor(someImage){
  let img = createImage(someImage.width, someImage.height);

//Load pixels so you can adjust in array
  img.loadPixels();
  someImage.loadPixels();

  for (let x = 0; x < someImage.width; x++){
    for (let y = 0; y < someImage.height; y++){
      let p = someImage.get(x,y);

      //filter
      let r = red(p);
      let g = green(p);
      let b = blue(p);
      
      let average = (r + g + b)/2 

      img.set(x, y, color(average, average, average));
    }
  }
  img.updatePixels();
  return img;
}

