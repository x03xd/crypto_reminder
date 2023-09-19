import {Subject} from './Subject.js';;
import {Factory} from './Factory.js';

const factory = new Factory();


const validate = (character) => {
    const maxCharacters = 5;

    if(Subject.observers.length + 1 > maxCharacters) {
        alert("The maximum number of characters is five")
        return
    }

    factory.createCharacter(character)
}


const addGirl = document.getElementById("add-girl")
if(addGirl) addGirl.addEventListener("click", () => {
    validate("girl")
});


const addPumpkin = document.getElementById("add-pumpkin")
if(addPumpkin) addPumpkin.addEventListener("click", () => {
    validate("pumpkin")
});


const addRobot = document.getElementById("add-robot")
if(addRobot) addRobot.addEventListener("click", () => {
    validate("robot")
});
