

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

        if(character.name === "girl") {
            Subject.frequencyMap["girl-image"] += 1;

            const removeButton = document.querySelector("#remove-girl");
            removeButton.classList.remove("default-red")
        }

        else if(character.name === "pumpkin") {
            Subject.frequencyMap["pumpkin-image"] += 1;

            const removeButton = document.querySelector("#remove-pumpkin");
            removeButton.classList.remove("default-red")
        }

        else if(character.name === "robot") {
            Subject.frequencyMap["robot-image"] += 1;
            const removeButton = document.querySelector("#remove-robot");
            removeButton.classList.remove("default-red")
        }

        const imageContainer = document.querySelector(".image-container");
        let img = document.createElement("img");

        img.src = character.constructor.idleImage;
        img.classList.add(character.constructor.className); 
        img.width = 196;
    
        imageContainer.appendChild(img);
    }

    static unregisterCharacter(character)
    {
        const indexToRemove = Subject.observers.findIndex((observer) => observer.name === character.name);

        if(character.name === "girl") {
            Subject.frequencyMap["girl-image"] -= 1
            if(Subject.frequencyMap["girl-image"] === 0) {
                const removeButton = document.querySelector("#remove-girl");
                removeButton.classList.add("default-red")
            }
        }

        else if(character.name === "pumpkin"){
            Subject.frequencyMap["pumpkin-image"] -= 1
            if(Subject.frequencyMap["pumpkin-image"] === 0) {
                const removeButton = document.querySelector("#remove-pumpkin");
                removeButton.classList.add("default-red")
            }
        }

        else if(character.name === "robot"){
            Subject.frequencyMap["robot-image"] -= 1
            if(Subject.frequencyMap["robot-image"] === 0) {
                const removeButton = document.querySelector("#remove-robot");
                removeButton.classList.add("default-red")
            }
        }
            

        if(indexToRemove !== -1){
            Subject.observers.splice(indexToRemove, 1)
        };

        const imageContainer = document.querySelector(".image-container");
        const imageToDelete = document.querySelector(`.${character.constructor.className}`);

        if (imageToDelete) imageContainer.removeChild(imageToDelete);
            
    }
    

    triggerActivity(state) 
    {
        if(state === "lay") Subject.observers.forEach((observer) => {observer.displayLay()});
        else if(state === "run") Subject.observers.forEach((observer) => {observer.displayRun()});
        else if(state === "jump") Subject.observers.forEach((observer) => {observer.displayJump()});
        else if(state === "idle") Subject.observers.forEach((observer) => {observer.displayIdle()});
    }

}