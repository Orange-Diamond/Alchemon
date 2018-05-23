/*exported pokeballData, docBookData, buildingData, trainerData */
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
        src: 'images/computer.gif'
    },
    {
        id: 'css-doc',
        src: 'images/computer.gif'
    },
    {
        id: 'js-doc',
        src: 'images/computer.gif'
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