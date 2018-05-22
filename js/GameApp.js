/* exported GameApp */
/* globals ScreenDisplay  buildingData DialogueDisplay*/
'use strict';

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {
    constructor() {
        this.buildingList = buildingData;

        //initialization logic to be added later
        //link to user profile
        //link to alchemon data
        //link to location data
    }

    render() {
        const dom = gameAppTemplate.content.cloneNode(true);

        const screenArea = dom.getElementById('screen-area');
        const screenComponent = new ScreenDisplay(this.buildingList, (buttonClicked) => {
        });
        
        const dialogueArea = dom.getElementById('dialog-area');
        const dialogueComponent = new DialogueDisplay;
        dialogueArea.appendChild(dialogueComponent.render());
        screenArea.appendChild(screenComponent.render());

        return dom;
    }
}

// player win/lose number for fight scene
function randomize () {


    for(let i = 0; i < 50; i++) {
        var randomNum = Math.floor(((Math.random()) * 50));
        const randomPlayerScore = randomNum;
        if(randomPlayerScore > 25) {
            // playerWins();
        } else {
            // playerLoses();
        }
            
    }

    console.log('randomPlayerScore', randomPlayerScore);
}

// user constructor function for use input properties
class Player {
    constructor(lives, wins, user.input) {
        this.lives = 3;
        this.wins = 0;
        // this.name = user.input;
    }
}