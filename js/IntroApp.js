'use strict';
/* exported newUser */

// const introAppTemplate = document.getElementById('intro-app-template');

// // class IntroApp {
// //     constructor() {
// //     }

// //     render() {
// //         const dom = introAppTemplate.content.cloneNode(true);

// //         this.labScreenArea = dom.getElementById('lab-screen-area');
// //         const labScreenComponent = new LabScreenDisplay();
// //         // this.labScreenArea.style.backgroundImage = 'url(\'images/lab-interior.jpg\')';
// //         this.labScreenArea.appendChild(labScreenComponent.render());

// //         const labDialogueArea = dom.getElementById('lab-dialogue-area');
// //         const labDialogueComponent = new LabDialogueDisplay();
// //         labDialogueArea.appendChild(labDialogueComponent.render());

// //         return dom;
// //     }
// // }


// function newUser(){
//     let userName = document.getElementById('userName').value;
//     let alchemon;
//     if(document.getElementById('html').checked){
//         alchemon = document.getElementById('html').value;
//     }
//     else if(document.getElementById('css').checked){
//         alchemon = document.getElementById('html').value;
//     }
//     else if(document.getElementById('js').checked){
//         alchemon = document.getElementById('js').value;
//     }
//     console.log(userName);
//     console.log(alchemon);
//     window.localStorage.setItem('player', JSON.stringify(userName));
//     window.localStorage.setItem('alchemon', JSON.stringify(alchemon));
// }