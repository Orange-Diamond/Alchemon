/* exported  randomize  GameApp mapRefresh*/
/* globals userData mapRefresh gameApp docBookData ScreenDisplay mapRefresh homeData trainerData buildingData DialogueDisplay */
'use strict';

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {
    constructor() {
        this.buttonList = buildingData;
        this.userData = userData;
    }
    
    render() {
        const dom = gameAppTemplate.content.clmoved oneNode(true);
        this.screenArea = dom.getElementById('screen-area');
        const screenComponent = new ScreenDisplay(this.buttonList, (buttonClicked) => {
            let dialogue = document.getElementById('dialogue');
            console.log(buttonClicked);

            if(trainerData.includes(buttonClicked)){
                const battleResult = gameApp.randomize(this.result);
     
                console.log('Clicked trainer');
                dialogue.textContent = 'You battled ' + buttonClicked.id + '! and you ' + battleResult;
                if(this.userData[0].lives === 0){
                    this.screenArea.style.backgroundImage = 'url(\'' + 'images/loser.jpg' + '\')';
                    screenComponent.update(buttonClicked.buttons);
                }
            }
            else if(homeData.includes(buttonClicked)){
                dialogue.textContent = 'NO TOUCHING! JUST LOOKING.... UNLESS YOU HAS SNAKS?';
            }
            else if(docBookData.includes(buttonClicked)){
                window.open(buttonClicked.link);
                console.log('clicked ' + buttonClicked.id);
            }
            else {
                this.screenArea.style.backgroundImage = 'url(\'' + buttonClicked.bgSrc + '\')';
                screenComponent.update(buttonClicked.buttons);
            }
        });

        const dialogueArea = dom.getElementById('dialog-area');
        const dialogueComponent = new DialogueDisplay;
        dialogueArea.appendChild(dialogueComponent.render());
        this.screenArea.appendChild(screenComponent.render());

        return dom;
    }

    randomize(result) {
        var randomNum = Math.floor(((Math.random()) * 20));
        const randomPlayerScore = randomNum;
        const heartTemplate = document.getElementById('heart-template');
        this.result = result;
        if(randomPlayerScore < 6) {
            this.userData[0].lives--;
            console.log('lives left = ' + this.userData[0].lives);
            //render user lives left
            for(let i = 0; i < userData.lives; i++) {
                let heartImage = heartTemplate.cloneNode(true);
                const healthArea = document.getElementById('lives-left');
                healthArea.appendChild(heartImage);
            
            }



            return result = ' LOST!  ';
        } else {
            this.userData[0].wins++;
            console.log('win #' + this.userData[0].wins);
            return result = ' WON!  ';
        }
    }
}


function mapRefresh(){
    location.reload();
    // const dom = gameAppTemplate.content.cloneNode(true);
    // const screenArea = dom.getElementById('screen-area');
    // console.log(screenArea.backgroundImage);
    // screenArea.style.backgroundImage = 'url(\'images/map-area-bg.jpg\')';
    // console.log('clicked');
}