

<<<<<<< HEAD
class StrategySort {

    constructor(){
        this.imageContainer = document.querySelector(".image-container");
    }

    sort(){}


    add(){}

}


export class SortingByAlpha extends StrategySort {
    
    sort(sort_type) {
        const imagesArray = Array.from(this.imageContainer.getElementsByTagName("img"));
=======
export class StrategyByFrequency {
    

    sort(characters, sort_type) {

        const imageContainer = document.querySelector(".image-container");
        const imagesArray = Array.from(imageContainer.getElementsByTagName("img"));
>>>>>>> cd2cf124edcd69f23e5a21091e280a178698894c

        imagesArray.sort((a, b) => {
            const classA = a.className;
            const classB = b.className;

            return sort_type === "standard" ? classA.localeCompare(classB) : classB.localeCompare(classA);
        });

        if(imagesArray.length !== 0) this.add(imagesArray)
    }


    add(imagesArray) {
        this.imageContainer.innerHTML = "";

        for (const image of imagesArray) {
            this.imageContainer.appendChild(image);
        }
    }

}




export class SortingByAlpha extends StrategySort {
    
    sort(sort_type) {
        const imagesArray = Array.from(this.imageContainer.getElementsByTagName("img"));

        imagesArray.sort((a, b) => {
            const classA = a.className;
            const classB = b.className;

            return sort_type === "standard" ? classA.localeCompare(classB) : classB.localeCompare(classA);
        });

        if(imagesArray.length !== 0) this.add(imagesArray)
    }


    add(imagesArray) {
        this.imageContainer.innerHTML = "";

        for (const image of imagesArray) {
            this.imageContainer.appendChild(image);
        }
    }

}




