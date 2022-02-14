const water = '0';   // 0 = empty
const ship = '1';    // 1 = part of a ship
const sunken = '2';  // 2 = a sunken part of a ship
const missed = '3';  // 3 = a missed shot

let gameBoard = [
    [1,1,1,1,1,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0]
];

const fireButton = document.querySelector(".fire");
const showShipsButton = document.querySelector(".show-ships"); 
const hideShipsButton = document.querySelector(".hide-ships");
const cells = document.querySelectorAll(".cell");
let indexOfCells = 0; 

const fireTorpedo = (cell) => {
    if (cell.innerText === water) isWater(cell);
    if (cell.innerText === ship) isShip(cell);
}

const fireTorpedoCoordinates = () => {
    let coordenates = prompt("Fire positions in x,y format");
    let x = parseInt(coordenates.slice(0, -2));
    let y = parseInt(coordenates.slice(2, 3));
    let i = indexOfCoordinates(x, y);
    
    fireTorpedo(cells[i]);
}

const isWater = (cell) => {
    cell.classList.add ("water");
} 

const isShip = (cell) => {
    cell.classList.add ("ship");
} 

const setGameBoard = (gameBoard) => {

    for(var i=0; i<gameBoard.length; i++) {
        for(var j=0; j<gameBoard[i].length; j++) {
            cells[indexOfCells].innerText = gameBoard[i][j];
            indexOfCells++;
        }
    }
    cells.forEach(cell => {
        cell.addEventListener("click", function() { fireTorpedo(cell) });
    });
};

const showShips = () => {
    cells.forEach(cell => {
        if (cell.innerText === ship) cell.classList.add("show");
    });
}

const hideShips = () => {
    cells.forEach(cell => {
        if (cell.innerText === ship) cell.classList.remove("show");
    });
}

const indexOfCoordinates = (x, y) => { 
    switch (x) {
        case 1: return 1 + y - 2;
        case 2: return 10 + y - 1;
        case 3: return 20 + y - 1;
        case 4: return 30 + y - 1;
        case 5: return 40 + y - 1;
        case 6: return 50 + y - 1;
        case 7: return 60 + y - 1;
        case 8: return 70 + y - 1;
        case 9: return 80 + y - 1;
        case 10: return 90 + y - 1;
    }
}

showShipsButton.addEventListener("click", showShips);
hideShipsButton.addEventListener("click", hideShips);
fireButton.addEventListener("click", fireTorpedoCoordinates);

setGameBoard(gameBoard);