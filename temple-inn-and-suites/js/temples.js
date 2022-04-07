const requestURL = 'https://melodycurran.github.io/wdd230/temple-inn-and-suites/js/temples.json';
const cards = document.querySelector('.templeCards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

function displayTemples(temple) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let location = document.createElement('p');
  let dedicate = document.createElement('p');
  let portrait = document.createElement('img');


  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${temple.templeName}`
  location.textContent = `${temple.location}`
  dedicate.textContent = `${temple.dedicated}`

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', temple.imageUrl);
  portrait.setAttribute('alt', `Image of ${temple.templeName}`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(location);
  card.appendChild(dedicate);
  card.appendChild(portrait);
  
  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}