/* globals leaderBoard rowResults */
/* exported rowResults */

function playerResults() {
    const table = document.querySelector('tbody');
    for(let i in leaderBoard) {
        let tRow = document.createElement('tr');
        table.appendChild(tRow);
        console.log(' i is: ', leaderBoard[i]);
        for(let j in leaderBoard[i]){
            const tData = document.createElement('td');
            let innerBoard = leaderBoard[i];
            tData.textContent = innerBoard[j];
            console.log(tData);
            tRow.appendChild(tData);
        }
    }
}

playerResults();

