/*exported Button */
'use strict';
const buttonTemplate = document.getElementById('button-template');
class Button {
    constructor(onClick){
        this.onClick = onClick;

    }
    
    render() {
        const dom = buttonTemplate.content.cloneNode(true);
        const buttonComponent = dom.querySelector('span');
        buttonComponent.addEventListener('click', () => {
            console.log('clicked');
        });
        
        return dom;
    }

}