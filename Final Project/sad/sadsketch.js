var img;
function preload() {
  img = loadImage("136.png");
}

function preload() {
  img = loadImage("rain.gif");
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
  image(img, 100, 100);
  
}
