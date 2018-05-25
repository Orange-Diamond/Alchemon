'use strict';
const heartTemplate = document.getElementById('heart-template');

new Hearts{
    constructor(lives) {
        this.lives = 3;

    }
    update() {
        while(this.heartArea.lastElementChild){
            this.heartArea.lastElementChild.remove();
        }
        for(let i in this.lives){
            this.heart = heartTemplate.content.cloneNode(true);
            this.heartArea.appendChild(this.heart);
        }
    }
    
    render() {
        this.heartArea = document.getElementById('heart-area');
        this.update();
        return dom;
    }
    
}