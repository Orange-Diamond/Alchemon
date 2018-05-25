// /* exported userData, initUserData, clearUserData */
// 'use strict';

// const userProfile = window.localStorage.getItem('userData');

// window.onbeforeunload = () => {
//     window.localStorage.setItem('userData', JSON.stringify(userData));
// };

// let userData;
// if(userProfile) {
//     userData = JSON.parse(userProfile);
// }
// else {
//     initUserData();
// }

// function initUserData() {
//     userData = [
//         {
//             playerName: 'Ash',
//             alchemon: 'Pikachu',
//             lives: 3,
//             wins: 0
//         }
//     ];
// }

// // let userData = [
// //     {
// //         playerName: '',
// //         alchemon: 'Pikachu',
// //         lives: 3,
// //         wins: 0
// //     }
// // ];

// console.log(userData);

// /* For resetting user data: */
// function clearUserData() {
//     window.localStorage.clear('userData');
//     initUserData();
// }