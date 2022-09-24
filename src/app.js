import './styles/style.css';
//import { printMessage } from './scripts/test.ts';
// import axios from "axios";
// index.js
//import './scripts/signup.js'

//printMessage(user);
//printMessage(['susan', 'eric', 'john']);

var menu = document.querySelector('#mobile-menu');
var menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

