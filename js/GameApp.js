/* exported GameApp */
/* globals ScreenDisplay DialogueDisplay*/
'use strict';

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {
    constructor() {
        //initialization logic to be added later
        //link to user profile
        //link to alchemon data
        //link to location data
    }

    render() {
        const dom = gameAppTemplate.content.cloneNode(true);

        const screenArea = dom.getElementById('screen-area');
        const screenComponent = new ScreenDisplay;
        const dialogueArea = dom.getElementById('dialog-area');
        const dialogueComponent = new DialogueDisplay;
        dialogueArea.appendChild(dialogueComponent.render());
        screenArea.appendChild(screenComponent.render());

        return dom;
    }
}
