// API Key 

var APIKey = "a03d47697f79b2454fdf440a7b82771b";

// URL Builder 

var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.7489924&lon=-84.3902644&appid=a03d47697f79b2454fdf440a7b82771b';

console.log(this);


// Fetch Openweather API 

    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
        .then(function (data) {

    console.log(data);

        });