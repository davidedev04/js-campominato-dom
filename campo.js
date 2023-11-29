
// implementiamo nella pagina la griglia

// menzioniamo il contenitore
const gridCampo = document.getElementById("grid");

// definiamo il ciclo della tabella

const numbers = generationArray(1, 100, 16);

console.log(numbers);

for (let i = 1; i <= 100; i++) {

    const newEl = createAnElement("div", "square");

    /* newEl.append(numbers[i]); */

    newEl.addEventListener("click",

        function () {

            this.classList.add("clicked");
            console.log(i);

        }

    )



    newEl.append(i);

    gridCampo.append(newEl);

}





// definiamo le funzioni
function createAnElement(tag, attribute) {

    const createEl = document.createElement(tag);
    createEl.classList.add(attribute);

    return createEl;

}



function generationArray(minNumb, maxNumb, arreyLenght) {

    const arrayGen = [];

    while (arrayGen.length < arreyLenght) {

        let numberNew = createRandomNum(minNumb, maxNumb);

        if (!arrayGen.includes(numberNew)) {

            arrayGen.push(numberNew);

        }

    }

    return arrayGen;

}




function createRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}