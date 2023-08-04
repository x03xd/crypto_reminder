import {Character} from './Character.js'

export class Girl extends Character {

    static get idleImage() {
        return 'images/girlImages/Idle (7).png';
    }
    
    static get runImage() {
        return 'images/girlImages/Run (6).png';
    }
    
    static get jumpImage() {
        return 'images/girlImages/Jump (3).png';
    }
    
    static get layImage() {
        return 'images/girlImages/Dead (9).png';
    }
    
    static get className() {
        return 'girl-image';
    }

    static images;

    static initializeImages() {
        Girl.images = document.querySelectorAll(`.${Girl.className}`);
    }
    

    displayLay() {
        Girl.images.forEach((img) => {
            img.src = Girl.layImage;
        });
    }


    displayRun() {
        Girl.images.forEach((img) => {
            img.src = Girl.runImage;
        });
    }


    displayJump() {
        Girl.images.forEach((img) => {
            img.src = Girl.jumpImage;
        });
    }


    displayIdle() {
        Girl.images.forEach((img) => {
            img.src = Girl.idleImage;
        });
    }


}