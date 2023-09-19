import {Character} from './Character.js'

export class Pumpkin extends Character {

    static get idleImage() {
        return 'images/pumpkinImages/Idle (10).png';
    }
    
    static get runImage() {
        return 'images/pumpkinImages/Run (5).png';
    }
    
    static get jumpImage() {
        return 'images/pumpkinImages/Jump (3).png';
    }
    
    static get layImage() {
        return 'images/pumpkinImages/Dead (6).png';
    }
    
    static get className() {
        return 'pumpkin-image';
    }
    
    static images;

    static initializeImages() {
        Pumpkin.images = document.querySelectorAll(`.${Pumpkin.className}`);
    }


    displayLay() {
        Pumpkin.images.forEach((img) => {
            img.src = Pumpkin.layImage;
        });
    }


    displayRun() {
        Pumpkin.images.forEach((img) => {
            img.src = Pumpkin.runImage;
        });
    }


    displayJump() {
        Pumpkin.images.forEach((img) => {
            img.src = Pumpkin.jumpImage;
        });
    }


    displayIdle() {
        Pumpkin.images.forEach((img) => {
            img.src = Pumpkin.idleImage;
        });
    }


}