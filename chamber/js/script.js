
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