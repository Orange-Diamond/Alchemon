/*exported Button */
'use strict';
const buttonTemplate = document.getElementById('button-template');
class Button {
    constructor(button, onClick){
        this.button = button;
        this.onClick = onClick;

    }
    
    render() {
        const dom = buttonTemplate.content.cloneNode(true);
        const buttonComponent = dom.querySelector('img');
        buttonComponent.src = this.button.src;
        buttonComponent.addEventListener('click', () => {
            this.onClick(this.button);
        });
        
        return dom;
    }
}