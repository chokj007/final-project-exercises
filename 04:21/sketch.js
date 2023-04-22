let xLoc = 50 

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
//   Creates Height and size of a webpage window
  canvas.parent('parent')
}

function draw() {
  noStroke()
  fill(xLoc/windowHeight*255, xLoc/1000*255, xLoc/windowWidth*255, 100)
  
  ellipse(xLoc, 100, 100,)
  xLoc = xLoc + 10
  
  ellipse(mouseX, mouseY, 100)
  
  if(xLoc >= windowWidth) {
    xLoc = 50   // loop starts from the beginning
  }
  
}