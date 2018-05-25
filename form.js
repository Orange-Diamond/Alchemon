/* exported newUser */
function newUser(){
    let userName = document.getElementById('userName').value;
    let alchemon;
    if(document.getElementById('html').checked){
        alchemon = document.getElementById('html').value;
    }
    else if(document.getElementById('css').checked){
        alchemon = document.getElementById('html').value;
    }
    else if(document.getElementById('js').checked){
        alchemon = document.getElementById('js').value;
    }
    console.log(userName);
    console.log(alchemon);
    window.localStorage.setItem('player', JSON.stringify(userName));
    window.localStorage.setItem('alchemon', JSON.stringify(alchemon));
}