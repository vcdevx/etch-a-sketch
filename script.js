const container = document.getElementById("container");
const btnReset = document.getElementById("btnReset");
const suprise = document.getElementById("suprise");
let rows = 16;
let cols = 16;

function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
        for (i = 0; i < (rows * cols); i++) {
            let square = document.createElement("div");
            container.appendChild(square).className = "square";
            square.addEventListener('mouseenter', e => {
            if (surprise.checked) {
                square.style.backgroundColor = randomColor();
            } else {
                square.style.backgroundColor = '#36454F';
            }
        })
        }  
}

makeRows (30, 30);

btnReset.addEventListener('click', reset);

function reset() { 
    container.innerHTML = "";

    let gridSizeStr = prompt("Select the amount of squares for your grid (1-100)");
    gridSize = Number(gridSizeStr);
    if (gridSize > 0 && gridSize <= 100) {
        makeRows (gridSize, gridSize);
    } else {
        alert("Please select an integer between 1-100");
    }
}

function randomColor() {
    let anArray = [];
    for (var x = 0;x < 3;x++) {
        var randomNum = Math.floor(Math.random() * 256);
        anArray.push(randomNum);
    }
    let randomRgb = 'rgb(' + anArray[0] + ',' + anArray[1] + ',' + anArray[2] + ')';
    
    return randomRgb;
}