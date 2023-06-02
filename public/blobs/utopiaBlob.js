let vertices_amount = 70;
let yoff = 0.0;
let gSpeed = 1000;

let bGcolour; 
let blobcolour; 

let startColour; 
let endColour;



function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

}

function draw() {

  background(299, 13, 100);
//background(bGcolour());
  startColour = color(282, 23, 100, 0.4);
  endColour = color(193, 23, 100, 0.4);
  
  noStroke(); 
  const p = frameCount /gSpeed % 1
  const sig = (cos (p * TAU) + 1) / 2
  
  const lerp_col = lerpColor (endColour, startColour, sig)
  fill (lerp_col)
  
//fill(blobcolour());
  blobShape();

}

function blobShape ()
{
  translate(width / 2, height / 2);
  
  let radius = 150;
  
  beginShape();
  let xoff = 0;
  for (var a=0; a<TWO_PI;a+=TWO_PI/vertices_amount) {
    let offset = map(noise(xoff, yoff), 0, 1, -8, 8)
    let r = radius + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    curveVertex(x, y);
    xoff += 0.07;
  }

  endShape();
  
  yoff += 0.01;
  
 
}

