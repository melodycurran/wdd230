
// script for hamburger menu
function toggleMenu() {

    document.getElementById('primaryNav').classList.toggle('open');
}

let x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu


// script for time and date 
document.querySelector('#now').innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format();


// script for footer year and date modified
document.querySelector('#year').innerHTML = new Date().getFullYear();
document.querySelector('#currentDateandTime').innerHTML = document.lastModified;

// Script for the weather
let cityName = document.querySelector('.city-name');
let weather = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let tempCels = document.querySelector('.temp-Cels');
let windSpeed = document.querySelector('.wind-speed');


fetch('https://api.openweathermap.org/data/2.5/weather?id=' +5660340+ '&appid=caa8540702ef690bc84e562267149524')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let weatherValue = data['weather'][0]['description'];
        let tempValue = data['main']['temp'];
        let tempCelsValue = Math.round(((tempValue - 32) * (5 / 9)) * 100 / 100);
        let windSpeedValue = data['wind']['speed'];
        let windSpeedValueInKph = Math.round((windSpeedValue * 1.609) * 100 / 100);

        document.querySelector('.city-name').innerHTML = nameValue;
        document.querySelector('.desc').innerHTML = weatherValue.toUpperCase([0]);
        document.querySelector('.temp').innerHTML = 'Temperature: ' + tempValue + ' &#8457';
        document.querySelector('.temp-Cels').innerHTML = tempCelsValue + ' &#8451';
        document.querySelector('.wind-speed').innerHTML = 'Wind Speed: ' + windSpeedValue + ' MPH';
        document.querySelector('.kph').innerHTML = ' | ' + windSpeedValueInKph + ' KPH';

    })
    .catch(function() {
		// catch any errors
	});




// Script for the to display a banner on Mondays or Tuesdays only at the very 
// top of the page that says "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." 
const banner = document.querySelector('#top-page-banner');

let dayOfWeek = new Date().getDay();

if (dayOfWeek == 1 || dayOfWeek == 2) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}

// Script for closing the banner
const closeBtn = document.querySelector('.bannerBtn');
closeBtn.addEventListener('click', function() {
    if (banner.style.display !== "none") {
        banner.style.display = "none";
    }
})