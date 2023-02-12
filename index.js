/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function setFamilyAmount(){
const amountOfPeople = Number(document.querySelector('#family-members-amount').value)
for (let i = 0; i < amountOfPeople; i++) {
    createInput()
}
calculateButton = document.querySelector('#calculate-button')
calculateButton.style.display = 'block'
}

function createInput(){
    const pageNode = document.querySelector('#ages')
    const newListItem = document.createElement('li')
    const newInputItem = document.createElement('input')
    newInputItem.setAttribute('type', 'number')
    newInputItem.setAttribute('placeholder', 'Ingrese edad')
    newInputItem.setAttribute('class','ageinput')
    newListItem.appendChild(newInputItem)
    pageNode.appendChild(newListItem)
}

function calculate() {
    let agesArray = []
    let allAges = document.querySelectorAll(".ageinput")
    for (let i = 0; i < allAges.length; i++) {
agesArray.push(allAges[i].value)
    }
calculateAverage(agesArray)
calculateSmallest(agesArray)
calculateBiggest(agesArray)
reloadButton = document.querySelector('#reload-button')
reloadButton.style.display = 'block'
}


function calculateAverage(numbersArray) {
    toAverage = 0
    for (let i = 0; i<numbersArray.length; i++){
        toAverage += Number(numbersArray[i])
    }
    averageResult = toAverage/numbersArray.length
    document.querySelector("#result-average").innerText = "El promedio es " + averageResult
}

function calculateSmallest(numbersArray) {
    smallestnumber = Infinity
    for (let i = 0; i<numbersArray.length; i++){
        if (smallestnumber > Number(numbersArray[i])) {
            smallestnumber = Number(numbersArray[i])
        }
    }
    document.querySelector("#result-smallest").innerText = "El más pequeño es " + smallestnumber
}

function calculateBiggest(numbersArray) {
    biggestnumber = -Infinity
    for (let i = 0; i<numbersArray.length; i++){
        if (biggestnumber < Number(numbersArray[i])) {
            biggestnumber = Number(numbersArray[i])
        }
    }
    document.querySelector("#result-biggest").innerText = "El más grande es " + biggestnumber
}
