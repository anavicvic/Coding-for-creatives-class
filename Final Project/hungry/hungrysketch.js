var img;

function preload() {
  img = loadImage("arch-logo.png");
}

function setup() {
   createCanvas(windowWidth, windowHeight);
   background(125, 12, 232);
 }

function draw() {
  //fill(0, 0, 0);
  //noStroke();
  //ellipse (mouseX, mouseY, 30, 30);
  image (img, mouseX, mouseY, 40, 40);
  
}