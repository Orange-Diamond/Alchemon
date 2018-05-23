/* exported introAppTemplate, IntroApp */
/* globals LabScreenDisplay, LabDialogueDisplay */
'use strict';

const introAppTemplate = document.getElementById('intro-app-template');

class IntroApp {
    constructor() {
    }

    render() {
        const dom = introAppTemplate.content.cloneNode(true);

        const labScreenArea = dom.getElementById('lab-screen-area');
        const labScreenComponent = new LabScreenDisplay(this.buttonList, (buttonClicked) => {
            console.log(buttonClicked);
        });
        labScreenArea.appendChild(labScreenComponent.render());

        const labDialogueArea = dom.getElementById('lab-dialogue-area');
        const labDialogueComponent = new LabDialogueDisplay();
        labDialogueArea.appendChild(labDialogueComponent.render());

        return dom;
    }
}