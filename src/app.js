import './styles/style.css';
//import { printMessage } from './scripts/test.ts';
// import axios from "axios";
// index.js
const user = 'susan';
console.log(`hello ${user}, welcome to your npm project!`);

//printMessage(user);
//printMessage(['susan', 'eric', 'john']);

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})