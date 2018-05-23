/*exported pokeballData, docBookData, buildingData, trainerData */
'use strict';


let pokeballData = [
    {
        id: 'pokeball',
        src: 'images/'
    },
];
this.docBookData = [
    {
        id: 'html-doc',
        src: 'images/cursor-front.png'
    },
    {
        id: 'css-doc',
        src: 'images/cursor-front.png'
    },
    {
        id: 'js-doc',
        src: 'images/cursor-front.png'
    },
];



this.trainerData = [
    {
        id: 'Andrew',
        src: 'images/trainer-andrew.png',
    },
    {
        id: 'Zack',
        src: 'images/trainerZach.png'
    },
    {
        id: 'Michelle',
        src: 'images/trainerMichelle.png'
    },
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
        bgSrc: 'images/lab-interior.jpg',
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