function setup() {
  pixelDensity(5);
  createCanvas(window.innerWidth, 800, WEBGL);

}

function draw() {
  background(0);
  pop();
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  noFill();
  stroke(100, 100, 240);
  strokeWeight(5); // Thicker
  box(400);
  push();

  for(let i=0; i<5; i++){                 //counts through loop from 0 to 5
    stroke(100);
    box(30, 30, 30, 4, 4);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
   }


}
