let board = document.querySelector(".board");
export let cellArray = [];

export function createBoard() {
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("id", `${i}${j}`);
      cellArray.push(cell);

      board.appendChild(cell);
    }
  }
}

export function createSnakeAndFood() {
  let randomCellForSnake = cellArray[14];
  let randomCellForFood = cellArray[78];

  let snake = document.createElement("span");
  let food = document.createElement("span");

  snake.classList.add("snake");
  food.classList.add("food");
  randomCellForSnake.appendChild(snake);
  randomCellForFood.appendChild(food);
}
