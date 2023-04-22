
// Declare a global variable to store the data
let data;

// Define a setup function that runs once
function setup() {
// Create a canvas
  createCanvas(windowWidth, windowHeight);
  
  // Make an AJAX request to get the data
  $.ajax({
    url: "YOUR DATA URL",		
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "YOUR APP TOKEN"
    }
  }).done(function(response) {
    // Store the response in the data variable
	data = response;
	
  });
}

// Define a draw function that runs repeatedly
function draw() {
  // Clear the background
  background(0);
  
  // Check if the data is loaded
  if (data) {
    // Loop through the first 5 elements of the data array
    for (let i = 0; i < data.length; i++) {
	  // Draw a rectangle using some properties of the data element
	
  }
 }
}


