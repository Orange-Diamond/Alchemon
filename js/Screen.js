
/*exported ScreenDisplay */
/* globals Button */
'use strict';
const screenAreaTemplate = document.getElementById('screen-area-template');
class ScreenDisplay {
    constructor(buttonList, onClick){
        this.buttonList = buttonList;
        this.onClick = onClick;
    }
    
    render() {
        const dom = screenAreaTemplate.content.cloneNode(true);
        this.buttonArea = dom.getElementById('button-area');
        for(let i in this.buttonList){
            this.imageComponent = new Button(this.buttonList[i], this.onClick);
            this.buttonArea.appendChild(this.imageComponent.render());
        }
        return dom;
    }

}