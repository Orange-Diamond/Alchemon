/* globals rowResults, userData, clearUserData */
/* exported rowResults */

// const resultsColumn = ['playerName', 'alchemonCreature', 'wins'];
const resultsColumn = [userData[0].playerName, userData[0].alchemon, userData[0].wins];


function playerResults() {
    
    const table = document.getElementById('player');
    
    let tRow = document.createElement('tr');
    table.appendChild(tRow);
    for(let i in resultsColumn) {
        tRow = document.querySelector('tr');
        const tData = document.createElement('td');
        tData.textContent = resultsColumn[i];
        tRow.appendChild(tData);
    }
}
playerResults();


const button = document.querySelector('button');
button.addEventListener('click', () => {
    clearUserData();
    window.location.reload();
});