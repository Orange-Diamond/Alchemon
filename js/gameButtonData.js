/*exported docBookData, buildingData, trainerData, pokeballData */
'use strict';

let pokeballData = [
    {
        id: 'pokeball',
        src: 'images/alcheball.png'
    },
    {
        id: 'pokeball',
        src: 'images/alcheball.png'
    },
    {
        id: 'pokeball',
        src: 'images/alcheball.png'
    }
];

this.docBookData = [
    {
        id: 'html-doc',
        src: 'images/computer.gif',
        link: ' https://developer.mozilla.org/en-US/docs/Learn/HTML'
    },
    {
        id: 'css-doc',
        src: 'images/computer.gif',
        link: 'https://css-tricks.com/'
    },
    {
        id: 'js-doc',
        src: 'images/computer.gif',
        link: 'http://eloquentjavascript.net/'
    },
];

this.trainerData = [
    {
        id: 'Andrew',
        src: 'images/andrew-trainer.gif',
    },
    {
        id: 'Michelle',
        src: 'images/michelle-trainer.gif'
    },
    {
        id: 'Zack',
        src: 'images/zack-trainer.gif'
    }
];

this.homeData = [
    {
        id: 'Lewis',
        src: 'images/lewis.gif',
    }
];

let buildingData = [
    {
        id: 'gym',
        src: 'images/map-gym.png',
        bgSrc: 'images/gym-interior.png',
        buttons: this.trainerData
    },
    {
        id: 'lab',
        src: 'images/map-lab.png',
        bgSrc: 'images/lab-interior.jpg',
        buttons: this.docBookData
    },
    {
        id: 'home',
        src: 'images/map-home.png',
        bgSrc: 'images/lab-interior.jpg',
        buttons: this.homeData
    },
    
];

// this.loseData = [{
//     id: 'lose',
//     src: '',
//     bgSrc: 'images/loser.jpg',
//     buttons: this.loseData
// }];