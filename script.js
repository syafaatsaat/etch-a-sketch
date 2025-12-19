const gridContainer = document.querySelector("#grid");
const settingsContainer = document.querySelector("#settings");
let currentNumOfSquares = 16;

function generateGrid(numOfSquares = 16) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    currentNumOfSquares = numOfSquares;
    let size = 100 / numOfSquares;

    for (let x = 0; x < numOfSquares; ++x) {
        for (let y = 0; y < numOfSquares; ++y) {
            const square = document.createElement("div");
            square.setAttribute(
                "style", 
                "width: " + size + "%; height: " + size + "%;"
            );
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
            square.classList.remove("square-hover");
        }
    }
}

settingsContainer.addEventListener("click", (event) => {
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
