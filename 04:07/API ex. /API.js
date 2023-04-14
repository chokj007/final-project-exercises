// You need an API key from Open Weather Map to use their API
// You can sign up for a free one here: https://openweathermap.org/api_keys


const apiKey = "dc7a4dcf8b9dbd828cf7f934872e3735";
const city = 'New York';

// You need to specify the coordinates of Where you're targeting
// You can use this website to find them: https://www.latlong.net/
const lat = 40.7209;
const lon = -74.0007;

// You need to use the fetch function to make an API call
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// You need to use the .then() method to handle the response from the API
// You need to use the .json() method to parse the response as JSON
fetch(url)
  .then(response => response.json())
  .then(data => {
    // You can access the weather data from the data object
    // You can use this website to see what data is available: https://openweathermap.org/current#current_JSON
    const temp = data.main.temp; // The temperature in F
    const feelsLike = data.main.feels_like; // The temperature that it feels like in F
    document.getElementById('temperature').textContent = temp + '°F';
    document.getElementById('feelsLike').textContent = feelsLike;
    document.getElementById('location').textContent = city;

    if (feelsLike < 32) {
      document.body.classList.add('cold');
    } else if (feelsLike < 50) {
      document.body.classList.add('cool');
    } else if (feelsLike < 68) {
      document.body.classList.add('warm');
    } else {
      document.body.classList.add('hot');
    }


  

    // You can use console.log() to print the weather data to the console
		console.log("the current temperature in Manhattan is " + temp)
		console.log("the real feel temperature in Manhattan is " + feelsLike)
    
    
  })


  .catch(error => {
    // You need to use the .catch() method to handle any errors from the API call
    console.error(error);
  });


  // https://api.openweathermap.org/data/2.5/weather?lat=40.7209&lon=-74.0007&units=imperial&appid=dc7a4dcf8b9dbd828cf7f934872e3735


 

  
     