/* exported mapRefresh randomize  GameApp */
/* globals docBookData ScreenDisplay homeData trainerData buildingData DialogueDisplay */

'use strict';
let leaderBoard;
let userName = window.localStorage.getItem('player');
let alchemon = window.localStorage.getItem('alchemon');
const storedData = window.localStorage.getItem('scoreBoard');
const scoreboard = JSON.parse(storedData);
if(scoreboard){
    leaderBoard = scoreboard;
}
else {
    leaderBoard = [];
}

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {
    constructor() {
        this.buttonList = buildingData;
        this.lives = 3;
        this.wins = 0;
        if(alchemon){
            this.playerPokemon = JSON.parse(alchemon);
        }
        else {
            alchemon = 'none';
        }
        if(userName){
            this.playerName = JSON.parse(userName);
        }
        else {
            userName = 'none';
        }

    }
    
    render() {
        const dom = gameAppTemplate.content.cloneNode(true);
        this.screenArea = dom.getElementById('screen-area');
        const screenComponent = new ScreenDisplay(this.buttonList, this.lives, (buttonClicked) => {
            let dialogue = document.getElementById('dialogue');

            if(trainerData.includes(buttonClicked)){
                const battleResult = this.randomize(this.result);
                dialogue.textContent = 'You battled ' + buttonClicked.id + '! and you ' + battleResult;

                if(this.lives === 0){
                    this.user = [this.playerName, this.playerPokemon, this.wins];
                    leaderBoard.push(this.user);
                    window.localStorage.setItem('scoreBoard', JSON.stringify(leaderBoard));
                    dialogue.textContent = 'GAME OVER!';
                    document.getElementById('map-refresh').style.visibility = 'hidden';
                    this.screenArea.style.backgroundImage = 'url(\'' + 'images/loser.jpg' + '\')';
                    screenComponent.update(buttonClicked.buttons);
                }
            }
            else if(homeData.includes(buttonClicked)){
                dialogue.textContent = 'NO TOUCHING! JUST LOOKING.... UNLESS YOU HAS SNAKS?';
            }
            else if(docBookData.includes(buttonClicked)){
                window.open(buttonClicked.link);
            }
            else {
                this.screenArea.style.backgroundImage = 'url(\'' + buttonClicked.bgSrc + '\')';
                screenComponent.update(buttonClicked.buttons);
                dialogue.textContent = buttonClicked.text;
                this.playMusic(buttonClicked.mp3);
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
            let heartLoss = document.getElementById('heart-' + this.lives);
            heartLoss.style.visibility = 'hidden';
            return result = ' LOST!  ';
        } else {
            this.wins++;
            return result = ' WON!  ';
        }
    }
    
    playMusic(src) {
        let song = document.querySelector('audio');
        song.src = src;
        song.play();
    }
}

function mapRefresh(){
    location.reload();

}