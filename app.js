document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city) {
    var key = "68c613f14db19e066c4d03f0bf56c5f3";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(){

        });
}

function cityWeather(e) {
    weatherDataFetch("Tallinn")
}