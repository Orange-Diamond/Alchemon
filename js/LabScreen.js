/* exported labScreenAreaTemplate, LabScreenDisplay */
/* globals  */
'use strict';

const labScreenAreaTemplate = document.getElementById('lab-screen-area-template');

class LabScreenDisplay {
    constructor(pokeballList, onClick){
        this.buttonList = pokeballList;
        this.onClick = onClick;
    }

    render() {
        const dom = labScreenAreaTemplate.content.cloneNode(true);
        this.buttonArea = dom.getElementById('lab-button-area');
        
        return dom;
    }
}


/* for(let i in this.buttonList){
            this.imageComponent = new LabButton(this.buttonList[i], this.onClick);
            this.buttonArea.appendChild(this.imageComponent.render());
            console.log('button list', this.buttonList[i]);
        } */