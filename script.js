const gridContainer = document.querySelector("#grid");
const topSettingsContainer = document.querySelector("#top-settings");
const gridText = document.querySelector("#grid-text");
let currentNumOfSquares = 16;

function generateGrid(numOfSquares = 16) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    currentNumOfSquares = numOfSquares;
    let size = 100 / numOfSquares;
    gridText.textContent = numOfSquares + " x " + numOfSquares;

    for (let x = 0; x < numOfSquares; ++x) {
        for (let y = 0; y < numOfSquares; ++y) {
            const square = document.createElement("div");
            square.style.width = size + "%";
            square.style.height = size + "%";
            square.classList.add("square");
            gridContainer.appendChild(square);
        }
    }
}

generateGrid();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

gridContainer.addEventListener("mouseover", (event) => {
    let target = event.target;

    if (target.classList.contains("square")) {
        let randomColor = getRandomColor();
        target.style.backgroundColor = randomColor;
        
        const compStyles = window.getComputedStyle(target);
        let newOpacity = compStyles.getPropertyValue("opacity") - 0.1;
        target.style.opacity = newOpacity >= 0 ? newOpacity : 0;
    }
});

function getUserInput() {
    let input;
    do {
        input = prompt(
            "Enter the number of squares (per side). " + 
            "Please enter a number that is within 1 to 100."
        );

        if (input == null) {
            return -1;
        }
    } while (isNaN(input) || input < 1 || input > 100);

    return input;
}

function resetGrid() {
    for (let square of gridContainer.children) {
        if (square.classList.contains("square")) {
            square.style.backgroundColor = "#FFFFFF";
            square.style.opacity = 1;
        }
    }
}

topSettingsContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "num-of-squares":
            let number = getUserInput();
            if (number != -1) {
                generateGrid(number);
            }
            break;
        case "reset":
            resetGrid();
            break;
    }
});
