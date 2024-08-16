const colorField = document.querySelector("#colorField");

const refreshField = document.querySelector("#refreshField");

//Draws divs for a square gride of size `length`
function drawSquareField(length) {

    let i = 1;

    //Generates a row div to hold a row of 'length' divs
    while (i <= length) {

        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        colorField.appendChild(rowDiv);

        let j = 1;

        //Generates individual divs to fill the row
        while (j <= length) {
            const div = document.createElement("div");
            
            div.classList.add("tile");
            div.addEventListener("mouseenter", hoverDraw);

            rowDiv.appendChild(div);

            ++j;
        }

        ++i;

    }
}

function hoverDraw(e) {
    let elem = document.elementFromPoint(e.clientX, e.clientY);
    
    elem.style.backgroundColor = "black";
}

function refresh() {
    while (colorField.firstChild) {
        colorField.removeChild(colorField.lastChild);
    }

    let input;

    do {
        input = prompt("Enter a length less than 100:")
    } while (input >=100) {
        drawSquareField(input);
    };


}

let sideLength = 16;

drawSquareField(sideLength);

refreshField.addEventListener("click", refresh);

