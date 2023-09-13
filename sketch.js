function setup() {
    createCanvas(600, 600); //pixels//
    background(0,255,255); 
}

function draw() {
    stroke(255);
    fill("blue");
    ellipse(300, 300, 50, 50);
    fill(255,255,255);
    ellipse(400, 300, 100, 100);
    stroke(0);
    strokeWeight(4);
    rect(300,300,2200,200);
}
