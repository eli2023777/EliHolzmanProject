const navBarMobileContainer = document.querySelector('.navBarMobileContainer');
let fClick = true;

document.getElementById('hamburgerContainer').onclick = function () {
    let navBarMobile = document.querySelector('.navBarMobile');
    if (fClick) {
        navBarMobile.style.display = 'block';
        navBarMobile.innerHTML = `<ul id='mobileUl'>
                  <li><a href="#">ראשי</a></li>
                <li><a href="#onMe">אודות</a></li>
                   <li><a href="#projectsContainer">שירותים</a></li>
                     <li><a href="#conectsContainer">צור קשר</a></li>
                    <ul>`
        fClick = false;
    } else {
        navBarMobile.innerHTML = '';
        fClick = true;
    }
};

const form = document.getElementById('form');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const text = document.getElementById('text');
const submit = document.getElementById('submit');

try {

    const validateEmail = (email) => {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
} catch (e) { };


// send.addEventListener('click', () => {
//     let link = "mailto:eli770440@gmail.com" + encodeURIComponent(form.value);
//     window.location.href = link;
// });

