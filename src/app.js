import './styles/style.scss';
import './images/positive.svg';
import './images/dj1.jpg';
import './images/dj2.jpg';

function app () {
    /*Navbar logic*/

    var menu = document.querySelector('#mobile-menu');
    var menuLinks = document.querySelector('.navbar__menu');

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    })

}

app();