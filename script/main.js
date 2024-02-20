const navBarMobile = document.querySelector('.navBarMobile');

let fClick = true;


document.getElementById('hamburgerContainer').onclick = function () {
    if (fClick) {
        navBarMobile.style.display = 'block';
        navBarMobile.innerHTML = `<ul id='mobileUl'>
                  <li><a id="a1" href="#">ראשי</a></li>
                <li><a id="a2" href="#onMe">אודות</a></li>
                   <li><a id="a3" href="#projectsContainer">שירותים</a></li>
                     <li><a id="a4" href="#conectsContainer">צור קשר</a></li>
                    <ul>`
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`a${i}`).onclick = function () {
                navBarMobile.style.display = 'none';
            }
        }

        fClick = false;
    } else {
        navBarMobile.style.display = 'none';
        fClick = true;
    }
};



const form = document.getElementById('form');

const email = document.getElementById('email');
const phone = document.getElementById('phone');


try {
    const validateEmail = (email) => {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
} catch (e) { };

try {
    const validatePhone = (phone) => {
        return Number(phone).match([0 - 9]);
    };
} catch (e) { };



