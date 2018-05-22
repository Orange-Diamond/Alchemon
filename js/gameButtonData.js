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

    },
];

this.trainerData = [
    {
        id: 'Andrew',
        src: 'images/cursor-back.png'
    },
    {
        id: 'Zack',
        src: 'images/cursor-front.png'
    },
    {
        id: 'Michelle',
        src: 'images/cursor-right.png'
    },
];