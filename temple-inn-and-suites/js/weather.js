
const openWeatherURL = 
'https://api.openweathermap.org/data/2.5/onecall?lat=48.2028&lon=-114.3039&exclude=minutely&appid=caa8540702ef690bc84e562267149524&units=imperial';


fetch(openWeatherURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        //weatherAlert(jsonObject.alerts[0]);
        
        getCurrentWeather(jsonObject.current);
        
        for (let i = 0; i < 4; i++) {
            displayWeatherForecast(jsonObject.daily[i]);
        }
    });

function displayWeatherForecast(info) {
    let weatherDiv = document.querySelector('.weather-forecast');

    let section1 = document.createElement('section');
    let section2 = document.createElement('section');
    let cardDiv = document.createElement('div');
    let date = document.createElement('p');
    let icon = document.createElement('img');
    let temp = document.createElement('p');
    let tempDesc = document.createElement('p');
    let humidity = document.createElement('p');
    let windSpeed = document.createElement('p');
    let windChill = document.createElement('p');

    let get_dt= info.dt;
    let format_dt = new Date(get_dt * 1000);

    const iconURL = `https://openweathermap.org/img/w/${info.weather[0].icon}.png`;

    let tempInF = info.temp.day;
    let wind = info.wind_speed;

    date.innerHTML = format_dt.toLocaleDateString('en-us', {dateStyle: "full"});
    temp.innerHTML = `Temperature: ${info.temp.day} &#8457;`;
    icon.setAttribute('src', iconURL);
    tempDesc.textContent = info.weather[0].description;
    humidity.textContent = `Humidity: ${info.humidity}`;
    windSpeed.textContent = `Wind Speed: ${info.wind_speed} mph`;
    windChill.textContent = `Wind Chill: ${computeWindChill(tempInF, wind)}`;

    section1.appendChild(date);
    section1.appendChild(icon);
    section1.appendChild(tempDesc);

    section2.appendChild(temp);
    section2.appendChild(humidity);
    section2.appendChild(windSpeed);
    section2.appendChild(windChill);
    
    cardDiv.appendChild(section1);
    cardDiv.appendChild(section2);

    weatherDiv.appendChild(cardDiv);
}

function getCurrentWeather(info) {
    let currentWeather = document.querySelector('.current-weather');

    let currentWeatherSection = document.createElement('section');
    let icon = document.createElement('img');
    let temp = document.createElement('p');

    const iconURL = `https://openweathermap.org/img/w/${info.weather[0].icon}.png`;

    temp.innerHTML = `${info.temp} &#8457;`;
    icon.setAttribute('src', iconURL);

    currentWeatherSection.appendChild(icon);
    currentWeatherSection.appendChild(temp);

    currentWeather.appendChild(currentWeatherSection);

}

function computeWindChill(t, s) {
    windchill = Math.round((35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16) * 100 / 100);

    if (t <= 50 && s > 3) {
        return windchill
    } else {
        return `N/A`
    }
}

function weatherAlert(info) {
    
    let alertDiv = document.querySelector('.weather-alert');

    let section = document.createElement('section');
    let alertEvent = document.createElement('p');
    let msg = document.createElement('p');
    let sender = document.createElement('p');

    alertEvent.textContent = info.event;
    msg.textContent = info.description;
    sender.textContent = `Message from: ${info.sender_name}`;

    section.append(alertEvent);
    section.appendChild(msg);
    section.appendChild(sender);

    alertDiv.appendChild(section);

    const btn = document.querySelector('.xBtn');

    btn.addEventListener('click', () => {
        if (alertDiv.style.display !== "none") {
            alertDiv.style.display = "none";
        }
    })
}