var x = 180;
var y = 180;
var xspeed = 5;
var yspeed = 6;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (20);

}

function draw() {

	//distance from center of the screen
	var d = dist(windowWidth/10, windowHeight/10, 10, 50);

	//LEFT EYE
  	fill (255, 255, 255);
  	ellipse (x, y, d, d/2);

	fill (74, 217, 255);
  	ellipse (x, y, d/2, d/3);

  	fill (0, 0, 0);
  	ellipse (x, y, d/4, d/5);

  	//RIGHT EYE
  	fill (255, 255, 255);
  	ellipse (x+120, y, d, d/2);

	fill (74, 217, 255);
  	ellipse (x+120, y, d/2, d/3);

  	fill (0, 0, 0);
  	ellipse (x+120, y, d/4, d/5);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing vertically
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

}