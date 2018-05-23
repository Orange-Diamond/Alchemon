/* exported labScreenAreaTemplate, LabScreenDisplay */
/* globals LabButton */
'use strict';

const labScreenAreaTemplate = document.getElementById('lab-screen-area-template');

class LabScreenDisplay {
    constructor(pokeballList, onClick){
        this.buttonList = pokeballList;
        this.onClick = onClick;
    }

    transform(pokeball) {
        this.pokeball = pokeball;

        while(this.buttonArea.lastElementChild) {
            this.buttonArea.lastElementChild.remove();
        }
        for(let i in this.buttonList) {
            this.imageComponent = new LabButton(this.buttonList[i], this.onClick);
            this.buttonArea.appendChild(this.imageComponent.render());
        }
    }


    render() {
        const dom = labScreenAreaTemplate.content.cloneNode(true);
        this.buttonArea = dom.getElementById('lab-button-area');
        this.transform(this.buttonList);
        return dom;
    }

}