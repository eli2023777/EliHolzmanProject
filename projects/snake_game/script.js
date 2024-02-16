const startBtn = document.querySelector('.startBtn');
const grid = document.querySelector('.grid');
const box = document.querySelector('.box');
const span = document.querySelector('span');

const cellsArr = [];

for (let i = 0; i < 520; i++) {
    const cell = document.createElement('div');
    cell.style.width = '25px';
    cell.style.height = '25px';
    grid.appendChild(cell);
    cellsArr.push(cell);
}
const cells = document.querySelectorAll(".grid div");

let currentSnake = [2, 1, 0];

function startGame() {
    currentSnake = [2, 1, 0];
    currentSnake.forEach((i) => {
        const x = cells[i].createElement('div');
        x.classList.add("box");
    });
}

startBtn.addEventListener("click", startGame);
// box.addEventListener('click', () => {
//     const x = cellsArr[1];
// })



// let snake = [2, 1, 0];
// let appleIndex = 0;


