const pxCanvas = document.getElementById("pixelCanvas")
let pxCanvasBody = document.createElement("tbody");

// Select color input
let colorPicked = document.getElementById("colorPicker");

// Select size input
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");


// When size is submitted by the user, call makeGrid()
let gridSubmit = document.getElementById("sizePicker");
gridSubmit.addEventListener("submit", makeGrid);

function makeGrid(event) {
    // Prevent reset to default values
    event.preventDefault();

    // Remove previous grid and create new tbody
    if (pxCanvas.rows.length > 0) {
        pxCanvas.firstElementChild.remove();
        pxCanvasBody = document.createElement("tbody");
    }

    // Create grid
    for (let tableRow = 0; tableRow < gridHeight.value; tableRow++){
        let canvasRow = document.createElement("tr");
        for (let tableCol = 0; tableCol < gridWidth.value; tableCol++){
            let canvasCol = document.createElement("td");
            canvasRow.appendChild(canvasCol);
            // Change background color of cell to chosen color
            canvasCol.addEventListener("click", function () {
                canvasCol.style.backgroundColor = colorPicked.value;
            });
        }
        pxCanvasBody.appendChild(canvasRow);
    }
    pxCanvas.appendChild(pxCanvasBody);
}

