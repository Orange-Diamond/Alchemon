/*exported Button */
'use strict';
const buttonTemplate = document.getElementById('button-template');
class Button {
    
    render() {
        const dom = buttonTemplate.content.cloneNode(true);
        
        return dom; 
    }

}