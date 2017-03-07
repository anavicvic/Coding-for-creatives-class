var img;
function preload() {
  img = loadImage("star.png");
}

function setup() {
   createCanvas(windowWidth, windowHeight);
   background(3, 1, 59);
 }

function draw() {
  //background(0)
  //fill(255);
  //noStroke();
  //ellipse(mouseX, mouseY, 30, 30);
  image(img, mouseX, mouseY, 40, 40);

}

