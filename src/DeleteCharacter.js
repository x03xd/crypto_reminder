import {Factory} from './Factory.js'


const factory = new Factory()

const removeGirl = document.getElementById("remove-girl")
if(removeGirl) removeGirl.addEventListener("click", () => {
    
    factory.removeCharacter("girl")
});


const removePumpkin = document.getElementById("remove-pumpkin")
if(removePumpkin) removePumpkin.addEventListener("click", () => {

    factory.removeCharacter("pumpkin")
});


const removeRobot = document.getElementById("remove-robot")
if(removeRobot) removeRobot.addEventListener("click", () => {

    factory.removeCharacter("robot")
});
