/* exported introAppTemplate, IntroApp */
/* globals */
'use strict';

const introAppTemplate = document.getElementById('intro-app-template');

class IntroApp {
    constructor() {

    }

    render() {
        const dom = introAppTemplate.content;

        this.labScreenArea = dom.getElementById('lab-screen-area');
        const labScreenComponent = new LabScreenDisplay(this.buttonList, (buttonClicked) => {
            console.log(buttonClicked);
            this.labScreenArea.style.backgroundImage = "url('" + buttonClicked.bgSrc + "')";
            labScreenComponent.update(buttonClicked.buttons);
        });

        const labDialogueArea = dom.getElementById('dialog-area');
        const labDialogueComponent = new LabDialogueDisplay;
        labDialogueArea.appendChild(labDialogueComponent.render());
        this.labScreenArea.appendChild(labScreenComponent.render());

        return dom;
    }
    
}