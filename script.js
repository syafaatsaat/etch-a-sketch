const gridContainer = document.querySelector("#grid");

function create16x16Grid() {
    for (let x = 0; x < 16; ++x) {
        for (let y = 0; y < 16; ++y) {
            const square = document.createElement("div");
            square.classList.add("square");
            gridContainer.appendChild(square);
        }
    }
}

create16x16Grid();