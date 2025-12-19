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

function setupHoverEvents() {
    for (let square of gridContainer.children) {
        square.addEventListener("mouseover", (event) => {
            console.log("Mouse is over me!!!");
            square.classList.add("square-hover");
        });

        square.addEventListener("mouseout", (event) => {
            console.log("Mouse has left me!!!");
            square.classList.remove("square-hover");
        });
    }
}

generateGrid();

gridContainer.addEventListener("mouseover", (event) => {
    let target = event.target;

    if (target.classList.contains("square")) {
        target.classList.add("square-hover");
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
