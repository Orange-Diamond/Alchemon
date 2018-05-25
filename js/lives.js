'use strict';
const heartTemplate = document.getElementById('heart-template');

class Hearts {
  
    render() {
        const dom = heartTemplate.content.cloneNode(true);
        const heartComponent = dom.querySelector('img');
        return dom;
    }
    
}