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
        src: 'images/lab-gb-html.gif',
        link: ' https://developer.mozilla.org/en-US/docs/Learn/HTML'
    },
    {
        id: 'css-doc',
        src: 'images/lab-gb-css.gif',
        link: 'https://css-tricks.com/'
    },
    {
        id: 'js-doc',
        src: 'images/lab-gb-js.gif',
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
        mp3: 'audio/alchemon-battle.mp3',
        text: 'Pick Your Battle!',
        buttons: this.trainerData
    },
    {
        id: 'lab',
        src: 'images/map-lab.png',
        bgSrc: 'images/lab-interior.jpg',
        mp3: 'audio/alchemon-lab.mp3',
        text: 'Learn Some Code!',
        buttons: this.docBookData
    },
    {
        id: 'home',
        src: 'images/map-home.png',
        bgSrc: 'images/lewis-room.gif',
        mp3: 'audio/alchemon-map.mp3',
        text: 'Pet Lewis!',
        buttons: this.homeData
    },
    
];
