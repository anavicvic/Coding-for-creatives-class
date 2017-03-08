var img;
function preload() {
  img = loadImage("136.png");
}

function setup() {
   createCanvas(windowWidth, windowHeight);
   background(128, 156, 154);
 }

function draw() {
  //background(0)
  //fill(173, 134, 128);
  //noStroke();
  //ellipse (mouseX, mouseY, 30, 30);
  image(img, mouseX, mouseY, 40, 50);
}
