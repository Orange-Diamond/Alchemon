/* exported randomize  GameApp */
/* globals ScreenDisplay randomPlayerScore homeData trainerData buildingData DialogueDisplay*/
'use strict';

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {
    constructor() {
        this.buttonList = buildingData;
        // this.locationBackground = locationBgData;

        //initialization logic to be added later
        //link to user profile
        //link to alchemon data
        //link to location data
    }

    render() {
        const dom = gameAppTemplate.content.cloneNode(true);

        this.screenArea = dom.getElementById('screen-area');
        const screenComponent = new ScreenDisplay(this.buttonList, (buttonClicked) => {
            console.log(buttonClicked);
            if(trainerData.includes(buttonClicked)){
                console.log('Clicked trainer');
                alert('I\'m ' + buttonClicked.id);
            }
            else if(homeData.includes(buttonClicked)){
                alert('NO TOUCHING, JUST LOOKING');
            }
            else {
                this.screenArea.style.backgroundImage = 'url(\'' + buttonClicked.bgSrc + '\')';
                screenComponent.update(buttonClicked.buttons);
            }
        });

        const dialogueArea = dom.getElementById('dialog-area');
        const dialogueComponent = new DialogueDisplay;
        dialogueArea.appendChild(dialogueComponent.render());
        this.screenArea.appendChild(screenComponent.render());

        return dom;
    }
}

// // player win/lose number for fight scene
function randomize() {


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

// // user constructor function for use input properties
class Player {
    constructor(lives, wins, user.input) {
        this.lives = 3;
        this.wins = 0;
        // this.name = user.input;
    }
}