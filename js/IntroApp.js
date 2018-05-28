'use strict';

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', event => {
    event.preventDefault();
    let userName = document.getElementById('userName').value;
    // use the power of css!
    const alchemon = document.querySelector('input[name=alchemon]:checked').value;
    // let alchemon;
    // if(document.getElementById('html').checked){
    //     alchemon = document.getElementById('html').value;
    // }
    // else if(document.getElementById('css').checked){
    //     alchemon = document.getElementById('html').value;
    // }
    // else if(document.getElementById('js').checked){
    //     alchemon = document.getElementById('js').value;
    // }
    window.localStorage.setItem('player', JSON.stringify(userName));
    window.localStorage.setItem('alchemon', JSON.stringify(alchemon));
    window.location.href = 'game.html';

});

