const navBarMobileContainer = document.querySelector('.navBarMobileContainer');

document.getElementById('hamburgerContainer').onclick = function () {
    let box = document.getElementById('box');
    // navBarMobile.style.display = 'block';
    box.innerHTML = `<ul id='mobileUl'>
    <li><a href="#conectsContainer">צור קשר</a></li>
                    <li><a href="#projectsContainer">שירותים</a></li>
                    <li><a href="#onMe">אודות</a></li>
                    <li><a href="#">ראשי</a></li><ul>`
};