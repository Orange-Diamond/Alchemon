/* exported newUser */
function newUser(){
    let userName = document.getElementById('userName').value;
    window.localStorage.setItem('player', JSON.stringify(userName));
    console.log(userName);
}