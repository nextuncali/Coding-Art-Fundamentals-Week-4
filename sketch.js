let angle1;
let angle2;
function setup() {
createCanvas(windowWidth, windowHeight);
angleMode(DEGREES); //0 to 360 degrees
rectMode(CENTER);

angle1 = 0; 
angle2 = 2; 
}

function draw() {
// from here until * point of origin is center of canvas
background(255);

push();
translate(width/2, height/2);
rectMode(CENTER);
fill('#14e2d1');
stroke(0);
strokeWeight(4);
rotate(-angle2);
rect(0, 0, 300, 300);
pop();



push();
translate(width/2, height/2);
rectMode(CENTER);
fill('#FFBF65');
stroke(0);
strokeWeight(4);
rotate(angle2);
rect(0, 0, 200, 200);
pop();

push();
translate(width/2, height/2);
rectMode(CENTER);
rotate(-angle1);
fill('#0065A2'); 
rect(0, 0, 120, 120);
pop();




push();
translate(width/2, height/2);
rotate(angle1);
rect(0, 0, 100, 100);
pop();




angle1 += 1;
angle2 += 2;
}








