let eyeWidth = 100;
let faceWidth = 300;
let heartWidth = 50;

function setup() {
    createCanvas(600, 600); //pixels//
    background(0,255,255); 
}

function draw() {
    background(255); //refresh after each paint//
    fill(255); 
ellipse(mouseX, mouseY,50,50);


//4 squares in the corner//
fill(0);
    rect(0,0,50,50);
    rect(600 - 50, 0, 50, 50);
    rect(600 - 50, 600-50, 50, 50);
    rect(0, 600-50, 50, 50);

     //draw heart//
     arc(50, 55, 80, 80, PI, TWO_PI);
     arc(130, 55, 80, 80, PI, TWO_PI);
     triangle(10, 55, 170, 55, 95, 160);


translate(-100, 200); //change reference point to change positon to the following pattern//
    //face//
noFill();
stroke(0);
strokeWeight(3);
    square(365, 20, 170, 20);
    noStroke();
    fill("black");
    ellipse(500, 100, heartWidth, heartWidth);
    ellipse(400, 100, heartWidth, heartWidth);
    triangle(440, 100, 460, 100, 450, 150);


   // fill("white");
   // stroke(0);
    // ellipse(200,300,faceWidth,faceWidth);
    // stroke(0);
    // ellipse(100, 300, eyeWidth, eyeWidth);
    // ellipse(300, 300, eyeWidth, eyeWidth);
    
}
