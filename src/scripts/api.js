import '../app.js';
const button = document.querySelector('.api__container button');
const jokeText = document.querySelector('.api__container p');
document.addEventListener('DOMContentLoaded', getJoke);

const apiURL = 'https://icanhazdadjoke.com/';
button.addEventListener('click', getJoke);

/*
async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        header: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
    console.log(jokeObj);
}*/

function getJoke() {
    fetch(apiURL, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(data=> data.json())
     .then(obj => jokeText.innerHTML = obj.joke)
}