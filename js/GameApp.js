/* exported GameApp */
/* globals ScreenDisplay */
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
        const dom = gameAppTemplate.content;

        //template sections to be added:
        //screen display section:
        const screenDisplaySection = dom.getElementById('screen-display-section');
        const screenComponent = new ScreenDisplay();
        screenDisplaySection.appendChild(screenComponent.render());
        
        //text/input display 

        return dom;
    }
}
