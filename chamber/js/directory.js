
const dataURL = 'chamber/js/data.json';
const cardDiv = document.querySelector('.directoryCards');

fetch(dataURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);

        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusinesses);
    });

    function displayBusinesses(business) {

        let media_card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');

        h2.textContent = `${business.name}`
        phone.textContent = `Phone number: ${business.phone}`
        address.textContent = `Address: ${business.address}`

        image.setAttribute('src', business.images);
        image.setAttribute('alt', `Image of ${business.name}`);
        image.setAttribute('loading', 'lazy');

        website.setAttribute('href', business.website);
        website.textContent = `Website: ${website.setAttribute('href', business.website)}`

        media_card.appendChild(h2);
        media_card.appendChild(image);
        media_card.appendChild(phone);
        media_card.appendChild(address);
        media_card.appendChild(website);

        cardDiv.appendChild(media_card);
    }