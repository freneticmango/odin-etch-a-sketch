const container = document.querySelector("#container");

let sideLength = 16;


function drawSquareField(length) {
    
    let i = 1;

    while (i <= length) {

        let j = 1;

        console.log(i, j);
        
        while (j <= length) {
            const div = document.createElement("div");
            container.appendChild(div);
        
            console.log(i, j);

            ++j;
        }

        ++i;

    }
}

drawSquareField(sideLength);

console.log(container.childElementCount)