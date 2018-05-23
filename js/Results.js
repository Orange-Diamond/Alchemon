/* globals rowResults */
/* exported rowResults */

const resultsColumn = ['playerName', 'alchemonCreature', 'wins'];


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
