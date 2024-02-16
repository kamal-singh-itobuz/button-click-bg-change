const container = document.querySelector(".container");
const buttonOne = document.querySelector(".button-one");

const colorArray = ["#ffffff","#087e8b","#bfd7ea","#ff5a5f","#7678ed","#f7b801"];
let count = 1;
let buttonNumber = 1;

function createButton(container, count) {
    const button = document.createElement("button");
    button.setAttribute("class", "buttons button-one");
    button.innerText = `Button-${count}`;
    container.append(button);
}

buttonOne.addEventListener("click", () => {
    if (count === 0) {
        createButton(container, buttonNumber);
        buttonNumber++;
    }
    container.style.backgroundColor = colorArray[count];
    count++;
    if (count === colorArray.length) {
        count = 0;
    }
});
