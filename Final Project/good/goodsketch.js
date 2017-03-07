var img;
var img2;
function preload() {
  img = loadImage("b60.png");
  //img2 = loadImage("happy.jpg");
}

function setup() {
   createCanvas(windowWidth, windowHeight);
   background(97, 91, 255);
 }

function draw() {
  //fill(0, 0, 0);
  //noStroke();
  //ellipse (mouseX, mouseY, 30, 30);
  //background(mouseX, 0, 255, 113);

  image(img, mouseX, mouseY, 40, 50);

  
}