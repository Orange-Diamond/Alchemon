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
        const labScreenComponent = new LabScreenDisplay();

        const labDialogueArea = dom.getElementById('lab-dialog-area');
        const labDialogueComponent = new LabDialogueDisplay;
        labDialogueArea.appendChild(labDialogueComponent.render());
        this.labScreenArea.appendChild(labScreenComponent.render());

        return dom;
    }
}