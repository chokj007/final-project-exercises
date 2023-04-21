let xLoc = 50 

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
//   Creates Height and size of a webpage window
  canvas.parent('parent')
}

function draw() {
  background(xLoc/100*255, xLoc/200*255, xLoc/600*255, 10);
  noStroke()
  fill(xLoc,0,0)
  ellipse(xLoc, 100, 100,)
  xLoc = xLoc + 1
  
  ellipse(mouseX, mouseY, 100)
  
  if(xLoc >= 399) {
    xLoc = 50   // loop starts from the beginning
  }
  
}