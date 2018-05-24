/* exported  mapRefresh randomize  GameApp */
/* globals  docBookData ScreenDisplay homeData trainerData buildingData DialogueDisplay*/
'use strict';

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {
    constructor() {
        this.buttonList = buildingData;
        this.lives = 3;
        this.wins = 0;
        this.playerPokemon = 'Javasaurus';
        this.playerName = 'Chris';
    }
    
    render() {
        const dom = gameAppTemplate.content.cloneNode(true);
        this.screenArea = dom.getElementById('screen-area');
        const screenComponent = new ScreenDisplay(this.buttonList, (buttonClicked) => {
            let dialogue = document.getElementById('dialogue');
            console.log(buttonClicked);

            if(trainerData.includes(buttonClicked)){
                const battleResult = this.randomize(this.result);
     
                console.log('Clicked trainer');
                dialogue.textContent = 'You battled ' + buttonClicked.id + '! and you ' + battleResult;
                if(this.lives === 0){
                    this.user = [this.playerName, this.playerPokemon, this.wins];
                    window.localStorage.setItem('user', JSON.stringify(this.user));
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
        this.result = result;
        if(randomPlayerScore < 6) {
            this.lives--;
            console.log('loss' + this.lives);
            
            return result = ' LOST!  ';
        } else {
            this.wins++;
            console.log('win' + this.wins);
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