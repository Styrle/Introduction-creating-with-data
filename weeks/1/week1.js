function setup() {
  pixelDensity(5);
  createCanvas(windowWidth, 800, WEBGL);

}

function draw() {
  background(0);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  noFill();
  stroke(100, 100, 240);
  strokeWeight(5); // Thicker
  box(400);

  for(let i=0; i<5; i++){                 //counts through loop from 0 to 5
    stroke(100);
    box(30, 30, 30, 4, 4);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.05);
   }


}
