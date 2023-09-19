import {Robot} from './Robot.js'
import {Pumpkin} from './Pumpkin.js'
import {Girl} from './Girl.js'
import {Subject} from './Subject.js'


export class ObjectCleaner {

    removeCharacter(characterType) {

        if(characterType === "girl"){
            Subject.unregisterCharacter(new Girl("girl"))
            Girl.initializeImages()
        }

        else if(characterType === "pumpkin"){
            Subject.unregisterCharacter(new Pumpkin("pumpkin"))
            Pumpkin.initializeImages()
        }

        else if(characterType === "robot"){
            Subject.unregisterCharacter(new Robot("robot"))
            Robot.initializeImages()
        }

        else throw new Error("Invalid character type");

    }

}