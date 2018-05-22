/*exported DialogueDisplay */
'use strict';
const dialogueDisplayTemplate = document.getElementById('dialog-area-template');
class DialogueDisplay {
    
    render() {
        const dom = dialogueDisplayTemplate.content;

        return dom;
    }

}





// player name input and submit
    <form id='player-input'>
        Player Name:<input type="text" name="player"/>
        <input type="submit" value="Submit">
    </form>