/*exported ScreenDisplay */
'use strict';
const screenAreaTemplate = document.getElementById('screen-area-template');
class ScreenDisplay {
    
    render() {
        const dom = screenAreaTemplate.content.cloneNode(true);
        this.buttonArea = dom.getElementById('button-area');
        for(let i = 0; i < 3; i++){
            this.imageComponent = new Button;
            this.buttonArea.appendChild(this.imageComponent.render());
        }
        return dom;
    }

}