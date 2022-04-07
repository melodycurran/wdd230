function toggleMenu() {
    document.querySelector('#mainNav').classList.toggle('open');
}

let burgerBtn = document.querySelector('#burgerBtn')
burgerBtn.onclick = toggleMenu

// Script for current date
document.querySelector('#current-date').innerHTML = new Date().toLocaleDateString('en-us');
//Intl.DateTimeFormat('en-us', {dateStyle: 'full'}).format();

