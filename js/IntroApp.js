/* exported introAppTemplate, IntroApp */
/* globals pokeballData, LabScreenDisplay, LabDialogueDisplay */
'use strict';

const introAppTemplate = document.getElementById('intro-app-template');

class IntroApp {
    constructor() {
        this.buttonList = pokeballData;
    }

    render() {
        const dom = introAppTemplate.content.cloneNode(true);

        this.labScreenArea = dom.getElementById('lab-screen-area');
        this.labScreenArea.style.backgroundImage = 'url(\'images/lab-interior.jpg\')';
        const labScreenComponent = new LabScreenDisplay(this.buttonList, (buttonClicked) => {
            console.log(buttonClicked);
        });
        this.labScreenArea.appendChild(labScreenComponent.render());

        const labDialogueArea = dom.getElementById('lab-dialogue-area');
        const labDialogueComponent = new LabDialogueDisplay();
        labDialogueArea.appendChild(labDialogueComponent.render());

        return dom;
    }
}