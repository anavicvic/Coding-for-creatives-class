var img;
function preload() {
  img = loadImage("caca 1.png");
}

function setup() {
   createCanvas(windowWidth, windowHeight);
   background(148, 148, 54);
 }

function draw() {
  //background(0)
  //fill(104, 59, 16);
  //noStroke();
  //ellipse(mouseX, mouseY, 30, 30);
  image(img, mouseX, mouseY, 40, 50);

}

