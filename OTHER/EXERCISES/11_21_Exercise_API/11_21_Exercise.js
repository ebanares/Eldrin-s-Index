console.log("i'm alive");

window.onload = function(){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=1ce65a64b5fa999b22b252d711e6d3e9&units=metric";

	fetch(url) //get the data
	.then(response => response.json()) //convert data to json
	.then(data => {
		console.log(data);
		var temperature = data.main.temp;
		var name = data.name;
		var weather = data.weather[0].description;
		$("body").append("<h2>"+name+"</h2>");
		$("body").append("<h1>"+temperature+"ºC</h1>");
			$("body").css("background-color","rgb(0,0,"+(100*temperature)+")");
		$("body").append("<p>"+weather+"</p>");
	}) //use data to execute function
	.catch(error => {
		console.log(error);
	}) //if theres any errors, catch it and also execute a function
}