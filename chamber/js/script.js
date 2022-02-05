
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


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];

if(!d.getElementById(id)){js=d.createElement(s);
    js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js,fjs);
}}
(document,'script','weatherwidget-io-js');