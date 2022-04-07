//=============This should be how your url looks like======================//
const weatherURL = 
'https://api.openweathermap.org/data/2.5/onecall?lat=39.9274&lon=-82.0041&exclude=minutely,alerts&appid=7fa4b2c77bd9f2327e12c5154664f731'


//"https://api.openweathermap.org/data/2.5/forecast?id=7fa4b2c77bd9f2327e12c5154664f731"; //=======> This url is correct, it just needs more parameters in it like the latitude and longitude
//===============when I ran it first time, the url wasn't working.
  
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    //=============Putting jsonObject on console.log makes you see if your url is working or not=====================//
    console.log(jsonObject);
 
    //=============Extracting date and weather data from the jsonObject========================//
    let dt1 = jsonObject.daily[0].dt;
    //============Formatting the date into human-readable format=================//
    let day1 = new Date(dt1 * 1000);

    //===========Referencing the html for weekday1 and adding textContent to show the date as string============//
    document.querySelector('#weekday1').textContent = day1.toLocaleString('en-us');
    //==========Referending html for temp ======================//
    document.querySelector('#ftemp1').textContent = `${jsonObject.daily[0].temp.day} °F`;

    //==========Repeating the steps above for the next two days ======================//
    let dt2 = jsonObject.daily[1].dt;
    let day2 = new Date(dt2 * 1000);

    document.querySelector('#weekday2').textContent = day2.toLocaleString('en-us');
    document.querySelector('#ftemp2').textContent = `${jsonObject.daily[1].temp.day} °F`;

    let dt3 = jsonObject.daily[2].dt;
    let day3 = new Date(dt3 * 1000);

    document.querySelector('#weekday3').textContent = day3.toLocaleString('en-us');
    document.querySelector('#ftemp3').textContent = `${jsonObject.daily[2].temp.day} °F`;
  
  });



// fetch(fapiURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
  //==========The promise should be jsonObject not jsObject=================//
//       const time = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
//       console.log(time);
//       const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
//       let day = 0;
//       time.forEach((forecast) => {
//         if (day > 2) {
//         let thedate = new Date(forecast.dt_txt);
        
//         const imagesrc =
//           `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        
//         const desc = forecast.weather[0].description;
        
//         document.querySelector('#weekday').textContent =
//           weekdays[thedate.getDay()];
        
//         document.querySelector('#ftemp').textContent =
//         forecast.main.temp.toFixed(0) + "°F";
    
//         document.querySelector('#icon').setAttribute("src", imagesrc);
    
//         document.querySelector('#icon').setAttribute("alt", desc);
//         day++;
//         }
//       });
//     });