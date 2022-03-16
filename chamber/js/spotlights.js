

dataURL = 'https://melodycurran.github.io/wdd230/chamber/js/data.json';
spotlight1Div = document.querySelector('.spotlight1');
spotlight2Div = document.querySelector('.spotlight2');

fetch(dataURL)
.then((response) => response.json())
.then((jsonObject) => {
    console.log(jsonObject);

    number  = 0;
    random = Math.floor(Math.random() * number++);

    if (jsonObject.businesses[random]) {
        get_content(`FREE Protein Shake Apr. 1 - May 15`, 'images/free-protein-shake.webp', 'free-protein-shake', jsonObject.businesses[random], spotlight1Div);
    } if (jsonObject.businesses[random]) {
        get_content(`On-Demand Bus Until Spring`, 'images/on-demand-bus.webp', 'on-demand-bus', jsonObject.businesses[random], spotlight1Div);
    } if (jsonObject.businesses[random]) {
        get_content(`Tree Planting Initiatives`, 'images/tree-planting.webp', 'tree-planting-initiatives', jsonObject.businesses[random], spotlight1Div);
    } if (jsonObject.businesses[random]) {
        get_content(`Toys for Tots Gift-giving`, 'images/toys-for-tots.webp', 'toys-for-tots', jsonObject.businesses[random], spotlight2Div);
    } if (jsonObject.businesses[random]) {
        get_content(`Spring Harvest Parade`, 'images/spring-harvest-parade.webp', 'spring-harvest-parade', jsonObject.businesses[random], spotlight2Div);
    } if (jsonObject.businesses[random]) {
        get_content(`Art In The Park Registration Open`, 'images/art-in-the-park.webp', 'art-in-the-park', jsonObject.businesses[random], spotlight2Div);
    }
    
    



    function get_content(title, URL, alt, object, div) {
        let container = document.createElement('section');

        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let name = document.createElement('p');
        let phone = document.createElement('p');
        let site = document.createElement('p');

        h2.textContent = title;
        img.setAttribute('src', URL);
        img.setAttribute('alt', alt);
        name.textContent = object.name;
        phone.textContent = object.phone;
        site.textContent = object.website;

        container.appendChild(h2);
        container.appendChild(img);
        container.appendChild(name);
        container.appendChild(phone);
        container.appendChild(site);

        div.appendChild(container);
        
    }

});



    