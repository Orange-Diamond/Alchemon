
/*exported ScreenDisplay GameApp */
/* globals Button GameApp userData */
'use strict';
const screenAreaTemplate = document.getElementById('screen-area-template');
class ScreenDisplay {
    constructor(buildingList, onClick){
        this.buildingList = buildingList;
        this.onClick = onClick;
    }
    update(buttonList) {
        const heartTemplate = document.getElementById('heart-template');
        this.buttonList = buttonList;
        this.screenBackground = document.getElementById('screen-area');
        while(this.buttonArea.lastElementChild){
            this.buttonArea.lastElementChild.remove();
        }
        for(let i in this.buttonList){
            this.imageComponent = new Button(this.buttonList[i], this.onClick);
            this.buttonArea.appendChild(this.imageComponent.render());
        }
        //render user lives left
        for(let i = 0; i < userData.lives; i++) {
            heartTemplate.cloneNode(true);
            const healthArea = document.getElementById('lives-left');
            healthArea.appendChild(heartTemplate);
            
        }


    }
    
    render() {
        const dom = screenAreaTemplate.content.cloneNode(true);
        this.buttonArea = dom.getElementById('button-area');
        this.update(this.buildingList);
        return dom;
    }
}