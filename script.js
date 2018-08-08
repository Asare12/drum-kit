/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener('keydown', function (e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio)
        return;               //Stop function from working
    audio.currentTime = 0;          //Rewinds sounds to the start
    audio.play();
    key.classList.add("playing");
});

function removeTransistion(e) {
    if (e.propertyName !== "transform")    
        return;                         //Skips if its not a transform
    this.classList.remove("playing");
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransistion));



