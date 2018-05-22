/*exported Button */
'use strict';
const buttonTemplate = document.getElementById('button-template');
class Button {
    constructor(building, onClick){
        this.building = building; 
        this.onClick = onClick;

    }
    
    render() {
        const dom = buttonTemplate.content.cloneNode(true);
        const buttonComponent = dom.querySelector('img');
        buttonComponent.src = this.building.src;
        buttonComponent.addEventListener('click', () => {
            console.log(this.building);
            
        });
        
        return dom;
    }
}