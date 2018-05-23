/* globals IntroApp */
/* exported  */
'use strict';

const introApp = new IntroApp;
const dom = introApp.render();
const root = document.getElementById('root');

root.appendChild(dom);