/*import './styles/style.css';
import './about.html';
import './contact.html';
import './results.html';
import './signup.html';
import './scripts/signup.js'*/

function app () {
//import { printMessage } from './scripts/test.ts';
// import axios from "axios";
//import './scripts/signup.js'

//printMessage(user);
//printMessage(['susan', 'eric', 'john']);

var menu = document.querySelector('#mobile-menu');
var menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
}

app();