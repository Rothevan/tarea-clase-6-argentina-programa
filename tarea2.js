/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


let CurrentMember = 0
function addMember(){
    const pageNode = document.querySelector('#family-salaries')
    const newListItem = document.createElement('li')
    const newLabelItem = document.createElement('label')
    const newInputItem = document.createElement('input')
    CurrentMember = CurrentMember + 1
    newLabelItem.innerHTML =`Miembro ${CurrentMember}`
    newInputItem.setAttribute('type', 'number')
    newInputItem.setAttribute('placeholder', 'Ingrese Salario')
    newInputItem.setAttribute('class','ageinput')
    newListItem.appendChild(newLabelItem)
    newListItem.appendChild(newInputItem)
    pageNode.appendChild(newListItem)
}

function removeMember(){
    let lastChild = document.querySelector('#family-salaries').lastElementChild
   lastChild.parentNode.removeChild(lastChild)
   CurrentMember = CurrentMember - 1
}

function calculate() {
    let agesArray = []
    let allAges = document.querySelectorAll(".ageinput")
    for (let i = 0; i < allAges.length; i++) {
        if (allAges[i].value != 0){
agesArray.push(allAges[i].value)
}
    }
calculateAverage(agesArray)
calculateSmallest(agesArray)
calculateBiggest(agesArray)
calculateMonthlyAverage(agesArray)
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

function calculateMonthlyAverage(numbersArray) {
    toAverage = 0
    for (let i = 0; i<numbersArray.length; i++){
        toAverage += Number(numbersArray[i])
    }
    averageResult = toAverage/numbersArray.length
    document.querySelector("#result-monthly-average").innerText = "El promedio mensual es " + averageResult/12
}