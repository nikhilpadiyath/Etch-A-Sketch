let color = "black";
let click = false;
document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") click = !click;
    let draw = document.querySelector("#draw");
    if (click) {
      draw.innerHTML = "Now You Can Draw";
    } else {
      draw.innerHTML = "Not allowed to draw";
    }
  });
  let btnsel = document.querySelector("#select");
  btnsel.addEventListener("click", function () {
    size = getSize();
    createBoard(size);
  });
});
function createBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", divColor);
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = prompt("What size should be the Board");
  let message = document.querySelector("#message");
  if (input == "") {
    message.innerHTML = "Enter a number";
  } else if (input < 0 || input > 100) {
    message.innerHTML = "Enter a number between 1 and 100";
  } else {
    message.innerHTML = "Lets draw now!!!";
    return input;
  }
}
function divColor() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color == "erase") {
      this.style.backgroundColor = "white";
    } else {
      this.style.backgroundColor = "black";
    }
  }
}
function getcolor(colorchoice) {
  color = colorchoice;
}
function resetBoard() {
  divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
function eraseNote() {
  let erasenote = document.querySelector("#erasenote");
  erasenote.innerHTML = "Erasing...";
}

function deleteEraseNote() {
  let erasenote = document.querySelector("#erasenote");
  erasenote.innerHTML = "";
}
