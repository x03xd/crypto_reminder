import {Character} from './Character.js'

export class Robot extends Character {

    static get idleImage() {
        return 'images/robotImages/Idle (4).png';
    }
    
    static get runImage() {
        return 'images/robotImages/Run (7).png';
    }
    
    static get jumpImage() {
        return 'images/robotImages/Jump (4).png';
    }
    
    static get layImage() {
        return 'images/robotImages/Dead (10).png';
    }
    
    static get className() {
        return 'robot-image';
    }
    
    static images;
  
    static initializeImages() {
        Robot.images = document.querySelectorAll(`.${Robot.className}`);
    }

    displayLay() {
        Robot.images.forEach((img) => {
            img.src = Robot.layImage;
        });
    }


    displayRun() {
        Robot.images.forEach((img) => {
            img.src = Robot.runImage;
        });
    }


    displayJump() {
        Robot.images.forEach((img) => {
            img.src = Robot.jumpImage;
        });
    }


    displayIdle() {
        Robot.images.forEach((img) => {
            img.src = Robot.idleImage;
        });
    }

}