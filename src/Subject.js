

export class Subject {

    static frequencyMap = {
        "girl-image": 0,
        "pumpkin-image": 0,
        "robot-image": 0
    };

    static observers = [];

    static registerCharacter(character)
    {
        Subject.observers.push(character)
        Subject.frequencyMap[`${character.name}-image`] += 1

        const removeButton = document.querySelector(`#remove-${character.name}`);
        removeButton.classList.remove("default-red")

        const imageContainer = document.querySelector(".image-container");
        let img = document.createElement("img");

        img.src = character.constructor.idleImage;
        img.classList.add(character.constructor.className); 
        img.width = 196;
    
        imageContainer.appendChild(img);
    }


    static unregisterCharacter(character)
    {
        const characterName = character.name;
        const indexToRemove = Subject.observers.findIndex((observer) => observer.name === characterName);

        Subject.frequencyMap[`${characterName}-image`] -= 1

        if(Subject.frequencyMap[`${characterName}-image`] === 0) {
            const removeButton = document.querySelector(`#remove-${characterName}`);
            removeButton.classList.add("default-red")
        }

        if(indexToRemove !== -1){
            Subject.observers.splice(indexToRemove, 1)
        };

        const imageContainer = document.querySelector(".image-container");
        const imageToDelete = document.querySelector(`.${character.constructor.className}`);

        if (imageToDelete) imageContainer.removeChild(imageToDelete);
    }
    

    static triggerActivity(state) 
    {
        if(state === "lay") Subject.observers.forEach((observer) => {observer.displayLay()});
        else if(state === "run") Subject.observers.forEach((observer) => {observer.displayRun()});
        else if(state === "jump") Subject.observers.forEach((observer) => {observer.displayJump()});
        else if(state === "idle") Subject.observers.forEach((observer) => {observer.displayIdle()});
    }

}