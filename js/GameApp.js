/* exported randomize  GameApp */
/* globals ScreenDisplay randomPlayerScore homeData trainerData buildingData DialogueDisplay*/
'use strict';

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {
    constructor() {
        this.buttonList = buildingData;
        this.lives = 3;
        this.wins = 0;
        this.playerName = '';
        // this.locationBackground = locationBgData;

        //initialization logic to be added later
        //link to user profile
        //link to alchemon data
        //link to location data
    }

    render() {
        const dom = gameAppTemplate.content.cloneNode(true);

        this.screenArea = dom.getElementById('screen-area');
        const screenComponent = new ScreenDisplay(this.buttonList, (buttonClicked) => {
            console.log(buttonClicked);
            if(trainerData.includes(buttonClicked)){
                gameApp.randomize();
                console.log('Clicked trainer');
                alert('I\'m ' + buttonClicked.id);
            }
            else if(homeData.includes(buttonClicked)){
                alert('NO TOUCHING, JUST LOOKING');
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

    randomize() {

        var randomNum = Math.floor(((Math.random()) * 20));
        const randomPlayerScore = randomNum;
        if(randomPlayerScore < 6) {
            this.lives--;
            console.log('loss'+ this.lives );   
        } else {
            this.wins++;
            console.log('win'+ this.wins );
        }
            
    }
}