// API Key 

var apiKey = "a03d47697f79b2454fdf440a7b82771b";

// URL Builder 



// Variables from HTML elements 

var searchForm = document.getElementById("search-form");
var searchInput = document.getElementById("search-input");
var pastSearches = document.getElementById("history");
var weatherToday = document.getElementById("today");
var weatherForecast = document.getElementById("forecast");

// Event listener for form

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var cityName = searchInput.value.trim();
    if (cityName) {
        var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        getWeatherData(cityName);
    }
});

// Fetch Openweather API as a function

function getWeatherData(cityName) {

    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
        .then(function (weatherData) {
            console.log(weatherData);

        });

    }




