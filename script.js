const gridContainer = document.querySelector("#grid");

function create16x16Grid() {
    for (let x = 0; x < 16; ++x) {
        for (let y = 0; y < 16; ++y) {
            const square = document.createElement("div");
            //square.setAttribute("id", "sq");
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

create16x16Grid();
//setupHoverEvents();

gridContainer.addEventListener("mouseover", (event) => {
    let target = event.target;

    //if (target.id == "sq") {
    if (target.classList.contains("square")) {
        //console.log("Mouse is over me!!!");
        target.classList.add("square-hover");
    }
});

gridContainer.addEventListener("mouseout", (event) => {
    let target = event.target;

    if (target.classList.contains("square")) {
        target.classList.remove("square-hover");
    }
});
