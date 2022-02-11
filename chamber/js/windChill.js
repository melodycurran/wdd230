// Script for Wind Chill

let tempFahr = document.querySelector('.temp');
let tempCelsius = document.querySelector('.temp-Cels');
let windSpeed_ = document.querySelector('.wind-speed');


fetch('https://api.openweathermap.org/data/2.5/weather?id=' +5660340+ '&appid=caa8540702ef690bc84e562267149524')
    .then(response => response.json())
    .then(data => {
        let tempValue = data['main']['temp'];
        let tempCelsValue = Math.round(((tempValue - 32) * (5 / 9)) * 100 / 100);
        let windSpeedValueInMph = data['wind']['speed'];
        let windSpeedValueInKph = windSpeedValueInMph * 1.609;

        if ((tempValue <= 50 && windSpeedValueInMph > 3 ) || (tempCelsValue <= 10 && windSpeedValueInKph > 4.8)) {
            
            document.querySelector('.wind-chill').innerHTML = 'Wind Chill: ' + computeWindChillInF(tempValue, windSpeedValueInMph) + ' &#8457 ';
            document.querySelector('.windChillInCel').innerHTML = ' | ' + computeWindChillInc(tempCelsValue, windSpeedValueInKph) + ' &#8451 ';
        }
        
        function computeWindChillInF(t, s) {
            let windChill =  35.74 + .06215 * t - 35.75 * s ** 0.16 + .4275 * t * s ** .16;
            return Math.round(windChill * 100 / 100);
        }

        function computeWindChillInc(t, s) {
            let windChill = 13.12 + 0.6215 * t - 11.37 * s ** 0.16 + 0.3965 * t * s ** 0.16;
            return Math.round(windChill * 100 / 100);
        }

    })
    .catch(function() {
		// catch any errors
	});



