console.log("jeg er i dropdown.js");

const fruits = []
fruits.push({"id": 1, "name": "æble", "style": "fruit"})
fruits.push({"id": 2, "name": "pære", "style": "fruit"})
fruits.push({"id": 3, "name": "peanut", "style": "nut"})
fruits.push({"id": 4, "name": "appelsin", "style": "fruit"})

console.log(fruits)

const pbFillDropDown = document.getElementById("pbFillDropDown")
const ddFruits = document.getElementById("ddFruits")

function addFruitToDropDown(item) {
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.name
    ddFruits.appendChild(el)
    el.value = item.id
    el.value = item //why not put object in value?
    el.classList.add(item.style)
    el.classList
    el.className = item.style
}

function fillDropDown() {
    fruits.forEach(addFruitToDropDown)
}

function selectFruit() {
    const selindex = ddFruits.selectedIndex
    const selectedFruit = ddFruits.options[selindex]
    console.log(selectedFruit)
    console.log(selindex)
    console.log(selectedFruit.value)
}


pbFillDropDown.addEventListener("click", fillDropDown)
ddFruits.addEventListener("change", selectFruit)