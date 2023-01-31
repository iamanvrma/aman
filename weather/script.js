let weather = 
{
    apiKey: "5d62843cfdb9c9173a72261e672fed7d",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=metric")
            .then(response => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        
;        //USING CLASESS 
        // const { name } = data;
        // const { icon, description } = data.weather[0];
        // const { temp, humidity } = data.main;
        // const { speed } = data.wind;
        // const {country} = data.sys;
        // document.querySelector('.weatherText').innerText = "Weather in " + name + ", " + country;
        // document.querySelector('.weatherIcon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
        // // console.log("https://openweathermap.org/img/wn/" + icon + ".png");
        // document.querySelector('.description').innerText = description;
        // document.querySelector('.temp').innerText = temp + "℃";
        // document.querySelector('.humidity').innerText = "Humidity : " + humidity + " %";
        // document.querySelector('.windSpeed').innerText = "Wind Speed : " + speed + " km/h";

        // USING ID'S (THEY ARE GLOBAL)
        weatherText.innerText = "Weather in " + data.name + ", " + data.sys.country;
        weatherIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        descriptions.innerText = data.weather[0].description;
        temp.innerText = data.main.temp + "℃";
        humidityValue.innerText = "Humidity : " + data.main.humidity + " %";
        windSpeed.innerText = "Wind Speed : " + data.wind.speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector("#search-bar").value);
    }
};

document.querySelector('.search button').addEventListener("click", function () {
    weather.search();
})

document.querySelector('#search-bar').addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})
