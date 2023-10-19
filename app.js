let weather = {
    apikey: 'cb040946ff08ccb0fc7410c6063d1451',
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}`)
            .then(response => response.json())
            .then(data => this.displayWeather(data))
            .catch(err => console.log(err));
    },
    displayWeather: function (data) {
        console.log(data);
        const name = data.name;
        const { description } = data.weather[0];
        const { temp_min, temp_max, feels_like, humidity } = data.main;
        const { deg, speed } = data.wind;
        const { sunrise, sunset } = data.sys;

        console.log(name, temp_min, temp_max, feels_like, sunrise, sunset, humidity, deg, speed);

        document.querySelector('.data-city').innerHTML = 'Weather of ' + name;
        document.querySelector('.desc').innerHTML = 'Description : ' + description;
        document.querySelector('.min-temp').innerHTML = 'Min temperature is ' + temp_min + 'K';
        document.querySelector('.max-temp').innerHTML = 'Max temperature is ' + temp_max + 'K';
        document.querySelector('.feel-like').innerHTML = 'Feels like ' + feels_like + 'K';
        document.querySelector('.humidity').innerHTML = 'Humidity is ' + humidity + ' g.m-3';
        document.querySelector('.wind-deg').innerHTML = 'Wind Degree is ' + deg + '°';
        document.querySelector('.wind-speed').innerHTML = 'Wind Speed is ' + speed + 'm/s';
        document.querySelector('.sun-rise').innerHTML = 'Sunrise time is ' + new Date(sunrise * 1000).toLocaleTimeString();
        document.querySelector('.sun-set').innerHTML = 'Sunset time is ' + new Date(sunset * 1000).toLocaleTimeString();
    },
    search: function () {
        let searchInp = document.querySelector('.search-inp');
        this.fetchWeather(searchInp.value);
        searchInp.value = '';
    }
}

let searchInp = document.querySelector('.search-inp');
let searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    weather.search();
})

searchInp.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
        weather.search();
    }
})
