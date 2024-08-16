const colorField = document.querySelector("#colorField");

let sideLength = 16;

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
            div.classList.add("tile")
            rowDiv.appendChild(div);

            ++j;
        }

        ++i;

    }
}

drawSquareField(sideLength);

