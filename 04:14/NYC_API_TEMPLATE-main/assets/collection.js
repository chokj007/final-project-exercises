
// The reference to the section in our HTML
let parentElement = document.getElementById('parent')

//This is some of the JQUERY code that will easily let use use this API. 
	$.ajax({
		url: "https://data.cityofnewyork.us/resource/82zj-84is.json",
		type: "GET",
		data: {
		  "$limit" : 5000,
		  "$$app_token" : "yMi3Xr1rhwYiyz1eJHUvzDMib"
		}
	}).done(function(data) {
		
		console.log(data[0].streetname)

		for(let i =0; i < data.length; i++){

			let newDiv = document.createElement ('div')
			let red = data[i].width * 50 
			let blue = data[i].zipcode * 60
			let green = data[i].citycouncil * 40

	
			newDiv.innerHTML =` 
				<h4>${data[i].streetname}</h4>
				<p>${data[i].crossstreet1}</p>
				<p>${data[i].zipcode}</p>
				`
				newDiv.style.backgroundColor = `rgb(${red}, 220, ${blue})`

			parentElement.append(newDiv)

			if (data[i].streetname == 'Avenue') {
				newDiv.style.backgroundColor = `rgb(${red}, 220, ${blue})`
			} else if (data[i].zipcode>'10300.0') {
				newDiv.style.backgroundColor = `220, ${green}, ${blue})`
			} else {
				newDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
				}
	}});

	
  
