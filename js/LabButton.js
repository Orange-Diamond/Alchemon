/* exported LabButton */
/* 'use strict';

const labButtonTemplate = document.getElementById('lab-button-template');

class LabButton {
    constructor(button, onClick){
        this.button = button;
        this.onClick = onClick;
    }
    
    render() {
        const dom = labButtonTemplate.content.cloneNode(true);
        const buttonComponent = dom.querySelector('img');
        buttonComponent.src = this.button.src;
        buttonComponent.addEventListener('click', () => {
            this.onClick(this.button);
        });
        
        return dom;
    }
} */