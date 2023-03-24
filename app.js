function createGrid() {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  size = parseInt(prompt("What Size"));

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.width = `${640 / size}px`;
    square.style.height = `${640 / size}px`;
    container.appendChild(square);
  }

  const hoverSquare = document.querySelectorAll(".square");
  for (let squares of hoverSquare) {
    squares.addEventListener("mouseover", function () {
      squares.style.backgroundColor = "black";
    });
  }
}

function erase() {
  const erasedSquare = document.querySelectorAll(".square");
  for (let squares of erasedSquare) {
    squares.addEventListener("mouseover", function () {
      squares.style.backgroundColor = "white";
    });
  }
}

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

function rainbowMode() {
  const rainbowSquare = document.querySelectorAll(".square");
  for (let squares of rainbowSquare) {
    squares.addEventListener("mouseover", function () {
      const newColor = makeRandColor();
      squares.style.backgroundColor = newColor;
    });
  }
}

function clearBoard() {
  container.innerHTML = "";
  //createGrid();
}

function startSketch() {
  const newGridButton = document.querySelector("#gridSize");
  newGridButton.addEventListener("click", createGrid);
  const eraseButton = document.querySelector("#erase");
  eraseButton.addEventListener("click", erase);
  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clearBoard);
  const rainbowButton = document.querySelector("#rainbow");
  rainbowButton.addEventListener("click", rainbowMode);
}

startSketch();
