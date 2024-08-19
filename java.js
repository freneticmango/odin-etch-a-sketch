//Field where drawing will be generated
const colorField = document.querySelector("#colorField");

//Button which will be used to refresh the field for a new sketch
const refreshField = document.querySelector("#refreshField");
refreshField.addEventListener("click", refresh);

//Draws divs for a square grid of size `length`
function drawSquareField(length) {

    let i = 1;

    //Generates a row div to hold a row of 'length' divs
    while (i <= length) {

        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        colorField.appendChild(rowDiv);

        let j = 1;

        //Generates individual divs with hover event listeners to fill the row
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

//Returns a random value between 0 and 255 for color generation
const getRGB = () => Math.floor(Math.random() * (255 - 0));

//Gets hover element from pointer location, changes background color to random RGB, and handles opacity increases
function hoverDraw(e) {
    let elem = document.elementFromPoint(e.clientX, e.clientY);
    let opacity = getComputedStyle(elem)["opacity"];

    //Chooses random RGB and initializes opacity to 0.1 if the tile has not been drawn on
    if (!(elem.classList.contains('drawn'))) {
        elem.style.backgroundColor = `rgb(${getRGB()}, ${getRGB()}, ${getRGB()})`;
        
        let alpha = 0.1;
        elem.style.opacity = alpha;

        elem.classList.add('drawn');

    //Increases opacity if the tile has already been drawn on
    } else if (opacity < 1) {
        let alpha = +(opacity);
        alpha += 0.1;

        elem.style.opacity = alpha;
    }
}

//Removes current grid, prompts user for size of new grid, and draws new grid
function refresh() {
    while (colorField.firstChild) {
        colorField.removeChild(colorField.lastChild);
    }

    let input;

    do {
        input = prompt("Enter a length less than 100:")
    } while (input >= 100 || isNaN(input)) {  
        drawSquareField(input);
    };

}

//Initialize a 16 x 16 grid when the page is loaded
let sideLength = 16;

drawSquareField(sideLength);


