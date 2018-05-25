
/*exported ScreenDisplay */
/* globals Button */
'use strict';
const screenAreaTemplate = document.getElementById('screen-area-template');

class ScreenDisplay {
    constructor(buildingList, onClick){
        this.buildingList = buildingList;
        this.onClick = onClick;
        this.lives = 3;
    }
    update(buttonList) {
        this.buttonList = buttonList;
        this.screenBackground = document.getElementById('screen-area');
        this.heartTemplate = document.getElementById('heart-template');
        while(this.buttonArea.lastElementChild){
            this.buttonArea.lastElementChild.remove();
        }
        for(let i in this.buttonList){
            this.imageComponent = new Button(this.buttonList[i], this.onClick);
            this.buttonArea.appendChild(this.imageComponent.render());
        }
        for(let i = 0; i < 3; i++){
            this.heart = this.heartTemplate.content.cloneNode(true);
            this.heartArea = document.getElementById('heart-area');
            this.heartArea.appendChild(this.heart);
        }
    }
    
    render() {
        const dom = screenAreaTemplate.content.cloneNode(true);
        this.buttonArea = dom.getElementById('button-area');
        this.update(this.buildingList);
        return dom;
    }
}