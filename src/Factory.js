import {Robot} from './Robot.js'
import {Pumpkin} from './Pumpkin.js'
import {Girl} from './Girl.js'
import {Subject} from './Subject.js'


export class Factory {

    createCharacter(characterType){

        if(characterType === "girl") {
            const newGirl = new Girl("girl")
            
            Subject.registerCharacter(newGirl)
            Girl.initializeImages()
        }

        else if(characterType === "pumpkin") {
            const newPumpkin = new Pumpkin("pumpkin")

            Subject.registerCharacter(newPumpkin)
            Pumpkin.initializeImages()
        }

        else if(characterType === "robot") {
            const newRobot = new Robot("robot")

            Subject.registerCharacter(newRobot)
            Robot.initializeImages()
        }

        else throw new Error("Invalid character type");

    }

}