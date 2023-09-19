import {Subject} from './Subject.js';

class StrategySort {

    constructor(){
        this.imageContainer = document.querySelector(".image-container");
        this.imagesArray = null;
    }

    sort(){}

    add() {

        console.log("xddd")
        this.imageContainer.innerHTML = "";

        for (const image of this.imagesArray) {
            this.imageContainer.appendChild(image);
        }
    }

}


export class SortingByAlpha extends StrategySort {
    
    sort(sort_type, chained=false) {
        this.imagesArray = Array.from(this.imageContainer.getElementsByTagName("img"));

        this.imagesArray.sort((a, b) => {
            const classA = a.className;
            const classB = b.className;

            if(sort_type === "standard")
                return classA.localeCompare(classB)
                
            return classB.localeCompare(classA)
        });

        if(!chained && this.imagesArray.length !== 0) this.add()

    }

}


export class SortingByFrequency extends StrategySort {

    constructor(parent){
        super(parent);
        self.alpha = new SortingByAlpha()
    }

    sort(sort_type) {

        self.alpha.sort(sort_type, true)

        this.imagesArray = Array.from(this.imageContainer.getElementsByTagName("img"));
        const frequencyMap = Subject.frequencyMap

        this.imagesArray.sort((a, b) => {
            const classA = a.className;
            const classB = b.className;

            if(sort_type === "standard")
                return frequencyMap[classA] - frequencyMap[classB]

            return frequencyMap[classB] - frequencyMap[classA]
        });

        if(this.imagesArray.length !== 0) this.add()
 
    }

}
