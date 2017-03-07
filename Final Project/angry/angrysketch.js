var img;
function preload() {
  img = loadImage("knife.png");
}

function setup() {
   createCanvas(windowWidth, windowHeight);
   background(255);
 }

function draw() {
  //background(0)
  //fill(0);
  //noStroke();
  //ellipse(mouseX, mouseY, 30, 30);
  image(img, mouseX, mouseY, 60, 60);

}

