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
            console.log('button clicked', buttonClicked);

            if(buttonClicked.src === 'images/map-lab.png') {
                document.getElementById("screen-area").style.backgroundImage = "url('images/lab-interior.jpg')";
                // const buttonUpdate = new ScreenDisplay(docBookData[0]);
                // buttonUpdate.render();

            }
        });
        
        const dialogueArea = dom.getElementById('dialog-area');
        const dialogueComponent = new DialogueDisplay;
        dialogueArea.appendChild(dialogueComponent.render());
        screenArea.appendChild(screenComponent.render());

        return dom;
    }
}
