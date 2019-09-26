// 1942
// Matthew Resendes
// September 25th, 2019
//

let screen;
let soundOnColour = "green";
let soundOffColour = "red";
let soundOnOff = "on";

function preload(){
  plane = loadImage("assets/1942_SmallRed_Plane.png");
  rocket = loadImage("assets/rocket.png");
}
function setup() {
  createCanvas(900, 600);
  screen = "mainMenu";
}

function draw() {
  screenDisplay();
  mousePressed();
  controls(); 
  console.log(mouseX, mouseY);
  //console.log(screen)
}

function screenDisplay() {
  if (screen === "mainMenu"){
    background(255,255,102)
    titleDisplay();
  }
  if (screen === "game") {
    background(255,255,102);
  }
  if (screen === "optionMenu"){
    background(255,255,102);
    optionsDisplay();
  }
}

function mousePressed() {
  if (mouseIsPressed) {
    // Title Screen Buttons
    if (screen === "mainMenu") {
      titleButtons();
    }
    // Options Screen Buttons
    if (screen == "optionMenu") {
      optionsButtons();
    }
  }
}

function controls() {
  // Displays the Character and allowes movement controls
  if (screen === "game") {
      background(45);
      image(plane, mouseX, mouseY, 100, 100 );
      imageMode(CENTER);
      shoot();
      noCursor();
      console.log("Start Button")
}
}


function titleDisplay() {
  // Display for Title Screen
  background(45);
  fill(0,150,255);
  rectMode(CENTER);
  rect(450,350, 200, 75);
  rect(450, 450, 200, 75);
  fill(0,0,0)
  textAlign(CENTER, TOP);
  textSize(20);
  text("Options", 450, 440);
  text("Start", 450, 340);
  textSize(100);
  text("Pilot", 450, 100);
  textSize(15);
  text("Created by: Matthew Resendes", 450, 550);

}

function optionsDisplay() {
  // Display for Options Screen
  background(255,255,102);
  fill(0,150,255);
  rect(650, 605, 300, 100); 
  fill(soundOnColour);
  rect(845, 235, 50, 30);
  fill(soundOffColour);
  rect(905, 235, 50, 30);
  fill(controlsWASDColour);
  rect(845, 285, 50, 30);
  fill(controlsARROWSColour);
  rect(905, 285, 50, 30);
  fill(0,0,0);
  textAlign(CENTER);
  textSize(100);
  text("Options", 800, 100);
  textSize(20);
  text("Back", 800, 650);
  textSize(40);
  textAlign(LEFT, TOP);
  text("Sound", 660, 232.5);
  text("Controls", 660, 282.5);
}

function titleButtons() {
  // Buttons for title screen
  if (mouseX > 550 && mouseX < 350 && mouseY > 445 && mouseY < 345) {
    screen = "game";
    clear();
  }
  if (mouseX > 650 && mouseX < 950 && mouseY > 475 && mouseY < 575) {
    screen = "optionMenu";
    clear();
  }
}

function optionsButtons() {
  // Buttons for options screen
  if (mouseX > 650 && mouseX < 950 && mouseY > 310 && mouseY < 390) {
    screen = "mainMenu";
  }
  if (mouseX > 845 && mouseX < 895 && mouseY > 235 && mouseY < 265) {
    soundOnOff = "On";
    soundOnColour = "green";
    soundOffColour = "red";
  }
  if (mouseX > 905 && mouseX < 955 && mouseY > 235 && mouseY < 265) {
    soundOnOff = "Off";
    soundOnColour = "red";
    soundOffColour = "green";
  }
}
