function setup() {
  pixelDensity(3);
  createCanvas(windowWidth, 800, WEBGL);

}

function draw() {
  background(0);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  noFill();
  stroke(100, 100, 240);
  strokeWeight(4); // Thicker
  box(300);

  for(let i=0; i<5; i++){                 //counts through loop from 0 to 6
    stroke(100);
    box(30, 30, 30);
   }


}
