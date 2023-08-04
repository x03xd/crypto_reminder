

export class StrategyByFrequency {
    

    sort(characters, sort_type) {

        const imageContainer = document.querySelector(".image-container");
        const imagesArray = Array.from(imageContainer.getElementsByTagName("img"));

        imagesArray.sort((a, b) => {
            const classA = a.className;
            const classB = b.className;

            return sort_type === "standard" ? classA.localeCompare(classB) : classB.localeCompare(classA);
        });

        imageContainer.innerHTML = "";

        for (const image of imagesArray) {
            imageContainer.appendChild(image);
        }
    
        if(sort_type == "reverse") characters.sort((a, b) => a.name.localeCompare(b.name));
        else characters.sort((a, b) => b.name.localeCompare(a.name));

    }

}
