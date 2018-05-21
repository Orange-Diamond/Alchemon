/* exported GameApp */
'use strict';

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {
    constructor() {
        //initialization logic to be added later
    }

    render() {
        const dom = gameAppTemplate.content;

        //template sections to be added later:
        //screen display
        const screenDisplaySection = dom.getElementById('screen-display-section');
        const screenComponent = new ScreenDisplay();
        screenDisplaySection.appendChild(screenComponent.render());
        
        //text/input display 

        return dom;
    }
}