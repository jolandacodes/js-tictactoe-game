window.onload = function() {

  // HTML Elements
  const status = document.querySelector("#status");

  const restartButton = document.querySelector(".restartButton");

  const cellDivs = document.querySelectorAll(".cell");


  // Game Constanta

  const xSymbol = 'X';
  const oSymbol = 'O';

  let xIsNext = true;
  let gameIsLive = true;


  // Event Handlers

  const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

  const handleWin = (letter) => {
    gameIsLive = false;
    if (letter === 'x') {
      status.innerHTML = `${letterToSymbol(letter)} has won!`;
    } else {
      status.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
    }
  };

  const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[3];
    const topMiddle = cellDivs[1].classList[3];
    const topRight = cellDivs[2].classList[3];
    const middleLeft = cellDivs[3].classList[3];
    const middleMiddle = cellDivs[4].classList[3];
    const middleRight = cellDivs[5].classList[3];
    const bottomLeft = cellDivs[6].classList[3];
    const bottomMiddle = cellDivs[7].classList[3];
    const bottomRight = cellDivs[8].classList[3];

    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
      handleWin(topLeft);
      cellDivs[0].classList.add('won');
      cellDivs[1].classList.add('won');
      cellDivs[2].classList.add('won');
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
      handleWin(middleLeft);
      cellDivs[3].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[5].classList.add('won');
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
      handleWin(bottomLeft);
      cellDivs[6].classList.add('won');
      cellDivs[7].classList.add('won');
      cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
      handleWin(topLeft);
      cellDivs[0].classList.add('won');
      cellDivs[3].classList.add('won');
      cellDivs[6].classList.add('won');
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
      handleWin(topMiddle);
      cellDivs[1].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[7].classList.add('won');
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
      handleWin(topRight);
      cellDivs[2].classList.add('won');
      cellDivs[5].classList.add('won');
      cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
      handleWin(topLeft);
      cellDivs[0].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[8].classList.add('won');
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
      handleWin(topRight);
      cellDivs[2].classList.add('won');
      cellDivs[4].classList.add('won');
      cellDivs[6].classList.add('won');
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
      gameIsLive = false;
      statusDiv.innerHTML = 'Game is tied!';
    } else {
      xIsNext = !xIsNext;
      if (xIsNext) {
        status.innerHTML = `${xSymbol} is next`;
      } else {
        status.innerHTML = `<span>${oSymbol} is next</span>`;
      }
    }

  };

  const handleReset = () => {
    xIsNext = true;
    status.innerHTML = `${xSymbol} is next`;
    for (const cellDiv of cellDivs) {
      cellDiv.classList.remove('x');
      cellDiv.classList.remove('o');
      cellDiv.classList.remove('won');
    }
    gameIsLive = true;
  };

  const handleClickedCell = (e) => {

    let classesList = e.target.classList;

    if (xIsNext) {
      classesList.add('x');
      checkGameStatus();
    } else {
      classesList.add('o');
      checkGameStatus();
    }
  }

  //Event Listeners

  restartButton.addEventListener("click", handleReset);

  for (cellDiv of cellDivs) {
    cellDiv.addEventListener("click", handleClickedCell);
  }

};