/* exported introAppTemplate, IntroApp */
/* globals LabScreenDisplay, LabDialogueDisplay */
'use strict';

const introAppTemplate = document.getElementById('intro-app-template');

class IntroApp {
    constructor() {
    }

    render() {
        const dom = introAppTemplate.content.cloneNode(true);

        this.labScreenArea = dom.getElementById('lab-screen-area');
        const labScreenComponent = new LabScreenDisplay();
        // this.labScreenArea.style.backgroundImage = 'url(\'images/lab-interior.jpg\')';
        this.labScreenArea.appendChild(labScreenComponent.render());
        const labDialogueArea = dom.getElementById('lab-dialogue-area');
        const labDialogueComponent = new LabDialogueDisplay();
        labDialogueArea.appendChild(labDialogueComponent.render());

        return dom;
    }
}