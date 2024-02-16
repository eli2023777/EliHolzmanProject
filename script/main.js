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