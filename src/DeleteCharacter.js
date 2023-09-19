import {ObjectCleaner} from './ObjectCleaner.js'


const objectCleaner = new ObjectCleaner()

const removeGirl = document.getElementById("remove-girl")
if(removeGirl) removeGirl.addEventListener("click", () => {
    
    objectCleaner.removeCharacter("girl")
});


const removePumpkin = document.getElementById("remove-pumpkin")
if(removePumpkin) removePumpkin.addEventListener("click", () => {

    objectCleaner.removeCharacter("pumpkin")
});


const removeRobot = document.getElementById("remove-robot")
if(removeRobot) removeRobot.addEventListener("click", () => {

    objectCleaner.removeCharacter("robot")
});
