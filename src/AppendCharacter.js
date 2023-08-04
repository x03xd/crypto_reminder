import {Subject} from './Subject.js';;
import {Factory} from './Factory.js';

const factory = new Factory();


const addGirl = document.getElementById("add-girl")
if(addGirl) addGirl.addEventListener("click", () => {

    if(Subject.observers.length + 1 > 5) alert("The maximum number of characters is five")
    else factory.createCharacter("girl")
});


const addPumpkin = document.getElementById("add-pumpkin")
if(addPumpkin) addPumpkin.addEventListener("click", () => {

    if(Subject.observers.length + 1 > 5) alert("The maximum number of characters is five")
    else factory.createCharacter("pumpkin")
});


const addRobot = document.getElementById("add-robot")
if(addRobot) addRobot.addEventListener("click", () => {

    if(Subject.observers.length + 1 > 5) alert("The maximum number of characters is five")
    else factory.createCharacter("robot")
});
