
/*exported ScreenDisplay */
/* globals Button */
'use strict';
const screenAreaTemplate = document.getElementById('screen-area-template');

class ScreenDisplay {
    constructor(buildingList, lives, onClick){
        this.buildingList = buildingList;
        this.onClick = onClick;
        this.lives = lives;
    }
    update(buttonList) {
        this.buttonList = buttonList;
        this.screenBackground = document.getElementById('screen-area');
        this.heartTemplate = document.getElementById('heart-template');
        this.heartArea = document.getElementById('heart-area');
        while(this.buttonArea.lastElementChild){
            this.buttonArea.lastElementChild.remove();
        }
        for(let i in this.buttonList){
            this.imageComponent = new Button(this.buttonList[i], this.onClick);
            this.buttonArea.appendChild(this.imageComponent.render());
        }
        while(this.heartArea.lastElementChild){
            this.heartArea.lastElementChild.remove();
        }
        for(let i = 0; i < this.lives; i++){
            this.heart = this.heartTemplate.content.cloneNode(true);
            let img = this.heart.querySelector('img');
            img.id = 'heart-' + i;
            this.heartArea.appendChild(this.heart);
            console.log(img);
        }
    }
    
    render() {
        const dom = screenAreaTemplate.content.cloneNode(true);
        this.buttonArea = dom.getElementById('button-area');
        this.update(this.buildingList);
        return dom;
    }
}