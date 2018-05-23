/* exported labScreenAreaTemplate, LabScreenDisplay */
/*  */
'use strict';

const labScreenAreaTemplate = document.getElementById('lab-screen-area-template');

class LabScreenDisplay {
    constructor() {

    }

    render() {
        const dom = labScreenAreaTemplate.content.cloneNode(true);
        
        return dom;
    }

}