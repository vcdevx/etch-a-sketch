const container = document.getElementById("container");
let rows = 16;
let cols = 16;

function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
        for (i = 0; i < (rows * cols); i++) {
            let square = document.createElement("div");
            container.appendChild(square).className = "square";
    square.addEventListener('mouseenter', e => {
            square.style.backgroundColor = '#36454F';
        })
        }
        function reset() {
            let btnReset = document.getElementById("btnReset");
            btnReset.addEventListener('click', e => {
                square.forEach(item => {
                    item.style.backgroundColor = '#36454F';
                })
            })
        
        }
}
makeRows (30, 30);