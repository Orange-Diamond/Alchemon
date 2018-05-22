/*exported ScreenDisplay */
'use strict';
const screenAreaTemplate = document.getElementById('screen-area-template');
class ScreenDisplay {
    
    render() {
        const dom = screenAreaTemplate.content;

        return dom; 
    }

}